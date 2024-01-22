import ContacsBook from "./ContactsBook/ContactsBook";

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <ContacsBook/>
      React homework template
    </div>
  );
};
