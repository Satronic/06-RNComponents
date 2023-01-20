import { useState } from 'react';

interface Form {
    name: string;
    email: string;
    phone: number;
    isSuscribed: boolean;
}

export const useForm = () => {
    const [form, setForm] = useState<Form>({
        name: '',
        email: '',
        phone: 0,
        isSuscribed: false
    });

    const onChange = <Type extends Object>(value: Type, field: keyof Form) => {
        setForm({
            ...form,
            [field]: value
        })
    }
    return {
        onChange,
        form
    }
}
