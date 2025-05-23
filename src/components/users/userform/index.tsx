import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const UserForm: React.FC = () => {
    const [form, setForm] = useState({ name: "", email: "" });
    const [submitted, setSubmitted] = useState<{ name: string; email: string } | null>(null);
    const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: undefined });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: typeof errors = {};
        if (!form.name.trim()) newErrors.name = "El nombre es requerido";
        if (!form.email.trim()) newErrors.email = "El email es requerido";
        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            setSubmitted({ ...form });
        } else {
            setSubmitted(null);
        }
    };

    return (
        <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
                Ingresar Usuario
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <TextField
                    label="Nombre"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    required
                />
                <TextField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                />
                <Button type="submit" variant="contained">
                    Enviar
                </Button>
            </Box>
            {submitted && (
                <Box mt={3}>
                    <Typography variant="subtitle1">Datos ingresados:</Typography>
                    <Typography>Nombre: {submitted.name}</Typography>
                    <Typography>Email: {submitted.email}</Typography>
                </Box>
            )}
        </Paper>
    );
};

export default UserForm;