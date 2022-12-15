import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TermsServices from '../components/new_component/Terms_of_services';
import Footer from "../components/footer";
const PageTerms= () => {
    const GlobalStyles = createGlobalStyle`
  header#myHeader.navbar.white {
    background: #fff;
  }
  @media only screen and (max-width: 1199px) {
    .navbar{
      background: #403f83;
    }
    .navbar .menu-line, .navbar .menu-line1, .navbar .menu-line2{
      background: #111;
    }
    .item-dropdown .dropdown a{
      color: #111 !important;
    }
  }
`;

  return (
<>
<div className="container">
        <div className="col-10">
          <GlobalStyles/>
          <TermsServices/>
          <br />
          <h3 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Earum eaque optio quas, ipsa culpa, recusandae sunt quae saepe voluptatum, a perferendis placeat delectus fugit ducimus vel cum repellendus minus aspernatur. Iste sint temporibus error impedit dolores consectetur tenetur, quos officia fugit quas minus nihil debitis a omnis exercitationem odio repudiandae natus, magnam vitae, praesentium voluptate delectus accusamus earum. Porro officia sint sunt animi reprehenderit ad magnam deserunt accusantium maiores. Dignissimos, fugiat, magnam. Quos adipisci eius excepturi perferendis natus id ex odit consequatur vero aspernatur, veritatis nihil, dolores consectetur minima ipsa quaerat reiciendis accusamus ad eligendi nostrum dolore sed quia. Saepe neque voluptatem fuga quam consequuntur aspernatur nulla expedita, quidem aut, et? Cum, beatae. Reprehenderit voluptate rem similique illo at, doloribus voluptates ipsa quam. Illo error iste, aperiam quae eaque soluta quia laboriosam numquam blanditiis cupiditate eum delectus hic. Culpa consequuntur reiciendis consequatur, amet odit nulla, sapiente illo nostrum molestiae numquam aliquid quibusdam repellendus impedit enim dolorum quia dicta, voluptatem cupiditate labore. Magni inventore facilis harum corporis eius esse. Dicta culpa beatae, veritatis sunt, quos, excepturi aperiam architecto nemo laudantium a aliquam nobis quas quo optio, ab eveniet enim! Alias illo, cum deleniti doloribus vitae ipsa magni. Magnam ab velit laboriosam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Earum eaque optio quas, ipsa culpa, recusandae sunt quae saepe voluptatum, a perferendis placeat delectus fugit ducimus vel cum repellendus minus aspernatur. Iste sint temporibus error impedit dolores consectetur tenetur, quos officia fugit quas minus nihil debitis a omnis exercitationem odio repudiandae natus, magnam vitae, praesentium voluptate delectus accusamus earum. Porro officia sint sunt animi reprehenderit ad magnam deserunt accusantium maiores. Dignissimos, fugiat, magnam. Quos adipisci eius excepturi perferendis natus id ex odit consequatur vero aspernatur, veritatis nihil, dolores consectetur minima ipsa quaerat reiciendis accusamus ad eligendi nostrum dolore sed quia. Saepe neque voluptatem fuga quam consequuntur aspernatur nulla expedita, quidem aut, et? Cum, beatae. Reprehenderit voluptate rem similique illo at, doloribus voluptates ipsa quam. Illo error iste, aperiam quae eaque soluta quia laboriosam numquam blanditiis cupiditate eum delectus hic. Culpa consequuntur reiciendis consequatur, amet odit nulla, sapiente illo nostrum molestiae numquam aliquid quibusdam repellendus impedit enim dolorum quia dicta, voluptatem cupiditate labore. Magni inventore facilis harum corporis eius esse. Dicta culpa beatae, veritatis sunt, quos, excepturi aperiam architecto nemo laudantium a aliquam nobis quas quo optio, ab eveniet enim! Alias illo, cum deleniti doloribus vitae ipsa magni. Magnam ab velit laboriosam.</p>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing, elit. Earum eaque optio quas, ipsa culpa, recusandae sunt quae saepe voluptatum, a perferendis placeat delectus fugit ducimus vel cum repellendus minus aspernatur. Iste sint temporibus error impedit dolores consectetur tenetur, quos officia fugit quas minus nihil debitis a omnis exercitationem odio repudiandae natus, magnam vitae, praesentium voluptate delectus accusamus earum. Porro officia sint sunt animi reprehenderit ad magnam deserunt accusantium maiores. Dignissimos, fugiat, magnam. Quos adipisci eius excepturi perferendis natus id ex odit consequatur vero aspernatur, veritatis nihil, dolores consectetur minima ipsa quaerat reiciendis accusamus ad eligendi nostrum dolore sed quia. Saepe neque voluptatem fuga quam consequuntur aspernatur nulla expedita, quidem aut, et? Cum, beatae. Reprehenderit voluptate rem similique illo at, doloribus voluptates ipsa quam. Illo error iste, aperiam quae eaque soluta quia laboriosam numquam blanditiis cupiditate eum delectus hic. Culpa consequuntur reiciendis consequatur, amet odit nulla, sapiente illo nostrum molestiae numquam aliquid quibusdam repellendus impedit enim dolorum quia dicta, voluptatem cupiditate labore. Magni inventore facilis harum corporis eius esse. Dicta culpa beatae, veritatis sunt, quos, excepturi aperiam architecto nemo laudantium a aliquam nobis quas quo optio, ab eveniet enim! Alias illo, cum deleniti doloribus vitae ipsa magni. Magnam ab velit laboriosam.</p>
          <br />
          <h3 className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          <p>Lorem, ipsum dolor sit amet, consectetur adipisicing elit. Nostrum pariatur dignissimos, cum mollitia expedita? Temporibus, quos, eaque tenetur voluptatum in magnam. Aperiam neque quisquam molestiae inventore, ad molestias ab similique.</p>
        </div>
    </div>
    <Footer/>
</>
  );
}

export default PageTerms;