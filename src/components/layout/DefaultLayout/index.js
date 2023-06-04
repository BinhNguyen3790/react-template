import Navbar from '~/components/layout/components/Navbar';
import Sidebar from '~/components/layout/components/Sidebar';

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
