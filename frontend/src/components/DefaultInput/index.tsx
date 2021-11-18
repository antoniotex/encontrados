import React from 'react'
import { Form } from 'react-bootstrap'

interface DefaultInputProps {
    label: string;
    value: string;
    onChange: (e: any) => void;
    placeholder: string;
    type: string;
    name: string;
}

const DefaultInput: React.FC<DefaultInputProps> = ({ value, label, onChange, placeholder, type, name }) => {
    return (
        <Form.Group className="mb-3">
            <Form.Label>{label}</Form.Label>
            <Form.Control name={name} onChange={onChange} type={type} placeholder={placeholder} />
        </Form.Group>
    )
}

export default DefaultInput
