const Title = ({ title, subtitle, borderThickness }) => {
  return (
    <div className='app-title'>
      <h1
        className='title'
        style={{ border: `${borderThickness} solid #DDD`, borderRadius: '6px' }}
      >
        {title}
      </h1>
      <h2 className='subtitle'>{subtitle}</h2>
    </div>
  );
};

export default Title;
