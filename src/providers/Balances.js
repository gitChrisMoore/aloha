import { supabase } from '../supabase'
import { useAuth } from '../contexts/Auth';

export const Balances = () => {
    const { user } = useAuth()

    const getCurrentBalanceByUserID = async () => {
        let {data, error} = await supabase
            .from('current_balance')
            .select("*")
            .eq("user_id", user.id)
            .single()
        if (error) console.log('error - ', error)
        if (data) {
            return data
        } else {
            return null
        }

    };

    return {
        getCurrentBalanceByUserID
    }

}