import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
const Footer =()=>{

    return (
        <Breadcrumb>
            <Breadcrumb.Item>
                <Link to="/">홈</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/login">login</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/signup">signup</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/mypage">mypage</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/clubmaster">clubmaster</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/clubmain">clubmain</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/clubmain/articledetail/:id">articledetail</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/clubmain/createarticle">createarticle</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/nftalllist">nftalllist</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/nftalllist/nftdetail/:id">nftdetail</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                <Link to="/nftmint">nftmint</Link>
            </Breadcrumb.Item>
        </Breadcrumb>
    );
};
export default Footer;