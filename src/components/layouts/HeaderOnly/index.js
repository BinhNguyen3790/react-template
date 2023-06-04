import Navbar from '~/components/layouts/components/Navbar';

function HeaderOnly({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
