import { useRouter } from 'next/router';
// import { useEffect } from 'react';

const Error = () => {
  const router = useRouter();
  //   useEffect(() => {
  //     setTimeout(() => {
  //       router.push('/');
  //     }, 3000);
  //
  //   }, [router]);
  return (
    <>
      <h1>404</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
    </>
  );
};
export default Error;
