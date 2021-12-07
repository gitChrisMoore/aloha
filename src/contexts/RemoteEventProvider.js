import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../supabase'
import { useAuth } from './Auth';

const RemoteEventContext = createContext()

export const RemoteEventProvider = ({ children }) => {
    const [message, setMessage] = useState();
    const subscriptions = supabase.getSubscriptions()
    // const [mySubscription, setMySubscription] = useState(null);
    const {user} = useAuth()


    function handleNewMessage(msg) {
        if(user.id === msg.new.user_id) {
            setMessage(msg)
        }

    };

    async function setupListener() {

        if (subscriptions.length > 1) {
            console.log("subscription exists: ")
            // console.log("subscriptions: ", subscriptions)
        } else {
            console.log("setting up subscription ")
                let { data, error } = supabase
                    .from("subscriptions")
                    .on("INSERT", (res) => {
                        if (error) console.log(error);
                        handleNewMessage(res)
                        // console.log(res)
                        //
                        
                    })
                    .subscribe();
                if (error) {
                    console.log("subscription error: ", error);
                } else if (data) {
                    console.log("subscription created: ", data)
                    // setMySubscription(data)
                }
        }
    };
    
    async function handleSubscriptionRemoval() {

        for (const item of subscriptions) {
            if(item.state === 'closed') {
                // console.log("subscription state closed: ", item)
                supabase.removeSubscription(item);
            }
        }

    };

    useEffect(() => {
        setupListener()

        return () => {
            handleSubscriptionRemoval()
          };
    });

    const value = {
        message
      }
    
    return (
        <RemoteEventContext.Provider value={value}>
          {children}
        </RemoteEventContext.Provider>
    )

};

export function useRemoteEvents() {
    return useContext(RemoteEventContext)
}