import React from 'react';

const Container = (props) => {
  const { class1, children } = props;

  return (
    <section className={class1}>
      <div className='container-xxl'>{children}</div>
    </section>
  );
};

export default Container;

