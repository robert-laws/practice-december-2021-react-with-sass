const Title = ({ title, subtitle }) => {
  return (
    <div className='app-title'>
      <h1 className='title'>{title}</h1>
      <h2 className='subtitle'>{subtitle}</h2>
    </div>
  );
};

export default Title;
