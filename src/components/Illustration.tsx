import Image from 'next/image';

export default function Illustration() {
  return (
    <div
      role="img"
      aria-label="Ilustração de atendimento"
      style={{
        width: '100%',
        height: '100%',
        background: 'linear-gradient(135deg,#f0f5ff,#fff0f6)',
        borderRadius: 12,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Image
        src="/imagem2.svg"
        alt="Ilustração de atendimento"
        width={600}
        height={500}
        style={{ display: 'block', transform: 'translateY(-200px)' }}
      />
    </div>
  );
}
