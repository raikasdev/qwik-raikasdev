import { component$, Slot } from '@builder.io/qwik';

export default component$(() => {
  return (
    <>
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        Copyright &copy; 2022 Roni Äikäs
        <br />
        All rights reserved.  
      </footer>
    </>
  );
});
