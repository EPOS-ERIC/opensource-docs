
export default function ContributorCard({ name, role, href, avatar }) {
  return (
    <div style={{
      border: '1px solid rgba(0,0,0,0.08)',
      borderRadius: 12,
      padding: '1rem',
      minHeight: 96,
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      background: 'var(--ifm-card-background-color, #fff)',
      boxShadow: '0 1px 2px rgba(16,24,40,0.04)'
    }}>
      <div style={{
        width: 56,
        height: 56,
        borderRadius: 999,
        flex: '0 0 56px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
        fontWeight: 600,
        color: '#fff',
        background: '#6b7280',
        overflow: 'hidden'
      }}>
        {avatar
          ? <img src={avatar} alt={`${name} avatar`} style={{width: '100%', height: '100%', objectFit: 'cover'}}/>
          : name.split(' ').map(s=>s[0]).slice(0,2).join('').toUpperCase()
        }
      </div>

      <div style={{flex: 1}}>
        {href ? (
          <a href={href} style={{textDecoration: 'none', color: 'var(--ifm-link-color)'}}>
            <div style={{fontWeight: 600}}>{name}</div>
          </a>
        ) : (
          <div style={{fontWeight: 600}}>{name}</div>
        )}
        {role && <div style={{fontSize: 13, color: 'var(--ifm-color-muted)', marginTop: 4}}>{role}</div>}
      </div>
    </div>
  );
}
