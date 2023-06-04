import Navbar from '~/components/layouts/components/Navbar';
import Sidebar from '~/components/layouts/components/Sidebar';

function DefaultLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Sidebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
