import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import InputMask from 'react-input-mask';
import { z } from 'zod'; 

// Esquema de validação
const schema = z.object({
  name: z.string().min(2, 'Informe seu nome'),
  email: z.string().email('E-mail inválido'),
  phone: z.string().optional(),
  date: z.string().nonempty('Informe a data'),
  time: z.string().nonempty('Informe o horário')
});

// Inferindo o tipo do formulário
type FormData = z.infer<typeof schema>;

export default function BookingForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function onSubmit(data: FormData) {
    setStatus('loading');
    try {

      await new Promise((r) => setTimeout(r, 700));
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-describedby="form-status"
      style={{ background: '#fff', padding: 16, borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,.04)' }}
    >
      <label style={{ display: 'block' }}>
        <div>Nome completo</div>
        <input
          {...register('name')}
          aria-label="Nome completo"
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #e5e7eb' }}
        />
        {errors.name && <div style={{ color: 'red' }} role="alert">{errors.name.message}</div>}
      </label>

      <label style={{ display: 'block', marginTop: 12 }}>
        <div>E-mail</div>
        <input
          {...register('email')}
          aria-label="E-mail"
          type="email"
          style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #e5e7eb' }}
        />
        {errors.email && <div style={{ color: 'red' }} role="alert">{errors.email.message}</div>}
      </label>

      <label style={{ display: 'block', marginTop: 12 }}>
        <div>Telefone (opcional)</div>
        <InputMask mask="(99) 99999-9999" {...register('phone')}>
          {(inputProps: any) => (
            <input
              {...inputProps}
              aria-label="Telefone"
              style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #e5e7eb' }}
            />
          )}
        </InputMask>
      </label>

      <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
        <label style={{ flex: 1 }}>
          <div>Data</div>
          <input
            {...register('date')}
            type="date"
            aria-label="Data"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #e5e7eb' }}
          />
          {errors.date && <div style={{ color: 'red' }} role="alert">{errors.date.message}</div>}
        </label>

        <label style={{ flex: 1 }}>
          <div>Horário</div>
          <input
            {...register('time')}
            type="time"
            aria-label="Horário"
            style={{ width: '100%', padding: 8, borderRadius: 6, border: '1px solid #e5e7eb' }}
          />
          {errors.time && <div style={{ color: 'red' }} role="alert">{errors.time.message}</div>}
        </label>
      </div>

      <div style={{ marginTop: 16, display: 'flex', justifyContent: 'flex-end', gap: 8 }}>
        <button
          type="submit"
          disabled={status === 'loading'}
          style={{ padding: '8px 12px', borderRadius: 6, background: '#26c059', color: '#fff' }}
          aria-live="polite"
        >
          {status === 'loading' ? 'Enviando...' : 'Confirmar'}
        </button>
      </div>

      <div id="form-status" style={{ marginTop: 12 }} role="status" aria-live="polite">
        {status === 'success' && (
          <div style={{ color: 'green' }}>Agendamento realizado com sucesso. Verifique seu e‑mail.</div>
        )}
        {status === 'error' && <div style={{ color: 'red' }}>Erro ao enviar. Tente novamente.</div>}
      </div>
    </form>
  );
}
