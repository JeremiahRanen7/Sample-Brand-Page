import 'react-toastify/dist/ReactToastify.css';
import SuprSendInbox from '@suprsend/react-inbox';
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/brand_logo.png" alt="logo" />
      </div>
      <ul>
        <li href="#">Home</li>
        <li href="#">About</li>
        <li href="#">Location</li>
        <li href="#">Contact</li>
        <li href="#">Order</li>
      </ul>
      <SuprSendInbox
          workspaceKey="x0OBjDrAMzq3TGcjMm4L"
          subscriberId="H-Qb__2Qvgdo518WwlIzQz9OndEvCQigK-IqXwfA_Mk"
          distinctId="1234512"
        />
    </nav>
  )
}

export default Navbar
