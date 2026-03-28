'use client';

import { useState } from 'react';

type FormData = {
  username: string;
  fullName: string;
  age: string;
};

type FormErrors = {
  username?: string;
  fullName?: string;
  age?: string;
};

type SubmittedData = {
  username: string;
  fullName: string;
  age: string;
} | null;

export default function FormsCheck() {
  const [formData, setFormData] = useState<FormData>({
    username: 'test',
    fullName: 'name',
    age: '34',
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const [submittedData, setSubmittedData] = useState<SubmittedData>({
    username: 'TEST',
    fullName: 'NAME',
    age: '34',
  });

  const validate = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'el nombre de usuario es requerido';
    } else if (formData.username.trim().length < 4) {
      newErrors.username = 'el nombre de usuario debe tener al menos 4 caracteres';
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'el nombre completo es requerido';
    } else if (!/^[A-Za-z\s]+$/.test(formData.fullName)) {
      newErrors.fullName = 'el nombre completo debe contener solo letras';
    }

    if (!formData.age.trim()) {
      newErrors.age = 'la edad es requerida';
    } else if (!/^\d+$/.test(formData.age)) {
      newErrors.age = 'la edad debe ser un número';
    } else if (Number(formData.age) <= 0) {
      newErrors.age = 'la edad debe ser un número mayor que 0';
    }

    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSubmittedData(null);
      return;
    }

    setSubmittedData({
      username: formData.username.toUpperCase(),
      fullName: formData.fullName.toUpperCase(),
      age: formData.age,
    });
  };

  return (
    <div
      style={{
        margin: '12px auto',
        width: '95%',
        border: '1px solid #d9d9d9',
        borderRadius: '16px',
        padding: '18px 16px 28px 16px',
        fontFamily: 'serif',
        minHeight: '220px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'start',
        }}
      >
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '22px' }}>
            <label
              htmlFor="username"
              style={{ display: 'block', fontSize: '24px', marginBottom: '6px' }}
            >
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              style={{
                width: '160px',
                height: '28px',
                fontSize: '20px',
                border: '1px solid #000000',
                borderRadius: '4px',
              }}
            />
            {errors.username && (
              <div style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                {errors.username}
              </div>
            )}
          </div>

          <div style={{ marginBottom: '22px' }}>
            <label
              htmlFor="fullName"
              style={{ display: 'block', fontSize: '24px', marginBottom: '6px' }}
            >
              FullName:
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              value={formData.fullName}
              onChange={handleChange}
              style={{
                width: '160px',
                height: '28px',
                fontSize: '20px',
                border: '1px solid #000000',
                borderRadius: '4px',
              }}
            />
            {errors.fullName && (
              <div style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                {errors.fullName}
              </div>
            )}
          </div>

          <div style={{ marginBottom: '22px' }}>
            <label
              htmlFor="age"
              style={{ display: 'block', fontSize: '24px', marginBottom: '6px' }}
            >
              Age:
            </label>
            <input
              id="age"
              name="age"
              type="text"
              value={formData.age}
              onChange={handleChange}
              style={{
                width: '160px',
                height: '28px',
                fontSize: '20px',
                border: '1px solid #000000',
                borderRadius: '4px',
              }}
            />
            {errors.age && (
              <div style={{ color: 'red', fontSize: '14px', marginTop: '4px' }}>
                {errors.age}
              </div>
            )}
          </div>

          <button
            type="submit"
            style={{
              
              padding: '4px 10px',
              borderRadius: '6px',
              borderColor: '#000000',
              backgroundColor: '#ececec',
              border: '1px solid #000000',
            }}
          >
            Submit
          </button>
        </form>

        <div style={{ paddingTop: '18px', fontSize: '24px' }}>
          {submittedData ? (
            <ul
                style={{
                    margin: 0,
                    paddingLeft: '40px',
                    listStyleType: 'disc', 
                }}
                >
              <li>UserName: {submittedData.username}</li>
              <li>FullName: {submittedData.fullName}</li>
              <li>Age: {submittedData.age}</li>
            </ul>
          ) : (
            <p style={{ fontSize: '20px' }}>Sin informacion valida</p>
          )}
        </div>
      </div>
    </div>
  );
}