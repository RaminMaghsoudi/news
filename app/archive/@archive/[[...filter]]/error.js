"use client";

export default function FilterError({ error }) {
  return (
    <>
      <h2>An Error Ocuured!!!</h2>
      <p>{error.message}</p>
    </>
  );
}
