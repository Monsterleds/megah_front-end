import React, { useState } from 'react';
import { FiHome, FiMenu } from 'react-icons/fi';

import Logo from '../../assets/whiteLogo.svg';

import Header from '../../components/Header';

import {
  Container,
  Content,
  Menu,
  ListProjects,
  Project,
  MenuBackground,
  ResponsiveIcon,
} from './styles';

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Container>
      <ResponsiveIcon>
        <FiMenu size={30} color="#28CDCA" onClick={() => setIsMenuOpen(true)} />
      </ResponsiveIcon>
      <MenuBackground isOpen={isMenuOpen} onClick={() => setIsMenuOpen(false)} />
      <Menu isOpen={isMenuOpen}>
        <img src={Logo} alt="logo" />
        <ul>
          <li onClick={() => setIsMenuOpen(false)}>
            <FiHome size={23} />
            <a>Projetos</a>
          </li>
        </ul>
      </Menu>
      <Content>
        <Header />
        <h1>Seus Projetos</h1>
        <ListProjects>
          <Project>
            <img src="https://www.publicitarioscriativos.com/wp-content/uploads/2019/11/americanas-tera-pela-primeira-vez-o-maior-festival-de-compras-do-mundo.png" alt="project" />
            <div>
              Lorem ipsum dolor sit amet
            </div>
          </Project>

          <Project>
            <img src="data:image/png;base64,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" alt="project" />
            <div>
              Lorem ipsum dolor sit amet
            </div>
          </Project>

          <Project>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAzFBMVEUjLz7////skS0AFywAFSvylCwgLTwdKjrKzM8aJzgGHC/d3+AAGi4AEyoABCMADyfX2dozPUu7vsGztrrDxcj29vYPKT8AJj8NHzLn6eoUIzUAJT/R09UACyb5+fljanOtsLRyeH9OVV86RFGMkZfijC6HXTeGi5GjpqsAACJLU10AABxbYmvt7u6VmZ58gYgqMz19WDi/ejGdaDU3Nz2mbTTVhS/CfDFtcntCSlY+OzyxcjP5mCt1UzlVRTt3VTliSzqQYjZpTjpSQzs1Ej+6AAAFxklEQVR4nO3YaXPaOhQGYIONhI3ZgzEi7GsSsyQEEpbepun//0/3aDGQtpPkzvQW6LzPh1Y4B49eS5ZsLAsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE6BCccWwnYE0x8559RyPU8dYHHjba356B2EpoiH9AVu6ulcXH7r+Bx/nOD96wkpjFS/WDGKoiIPO+1yn7kWF512e8ZdU8umBVl7PQpVba980LZkBu51x+V2v+erQPw2irp0jlm7PWLiRAHDViVh1HrUbTtNrXQjIw9M1mJdk41KpLrndZr72iLVuq3EkS4dEb2C/lDy5NgVZXNWnKhztE4T8U0nazSVVMLSlT4wuYkjFWlMxPNRbSb8RUK3ezgXTXVWlF+fZcyhHv+4P79fqMboeqwjzYROWNvniBtjCuSr0U6P0+rIM03h6DhhkTFLVUzUv9e2SZg+Pscfp0dheuPd9GWj7OmElNHMtsREh6T+uh3ZGOW83DjuL7vtdru3euDGnuW11dlCV/3fETohXadrfQ7nBAl5q9ZMVFxm8Z7sw5VvEpbucnpKlho5NVAZ33KfZW1Wrh/maui1Mqe+kaEhC2WgQoNxIUexkDcJy3c5dXEm+RMktHg+57uuCB2mEtomId0ytpqqtCbeyEaG8rhZVetli/uExOvrOUp34XM8ttm0PqQSNumO9OU5mrlTJKSZ5oto1L4qvEnYsCxHHqlQp5yMHkNZa7v7WpNQD2hiRLlCNXs7tLPo6fosVMICDV1ezfXTJHSt8n672CeUVzsrc9TyxwlF8ajWJLRV39NyAvol2Wy5cdZ+qBKWfHOy0yR0u6bPleOElXgM3yQUUfOoVid0VJaKJTcCPfyRTDjVa88ZJDTre7uXcz9MqPfvxLh3d7gPzQb4rDZznVCOoTifhGY6Nbju/rsJvbIsmeU5X8cJWageV8pZdTJd0NnP0tE5zNKs7H1zTrvF+sOEanFt0gO2G8UJbZVp4omsJ0dOrapTEWdtiTNI2JCTtEIPI+FIdqHQeC+hTkP9n5rFRW8PieZkkmlHDtePOCXa19VjbZPzc0mYiGyPq+mWWPN3Eqp1Zu17ll5wejy7f6iTFWveUKNsCU/dnSWbnUFCWz1PVfp9HTBRC99JqN83+lOz+macRuUoIW31YqaOt2YTfbXOIaHuk+7wRwnF6G1txsn/kNDy04ePU886h4RmlybtOxrOdMje2Q+duP/jG/rbVcjy9JxaGrWi6Hl6rRIyUdjndazzSGg5o8KkUktHDhPpdt68HzYbJtjkzTON089Q7VVkc349ptpwPGv4wpXPtXlr3JLvvLnpRM9U+R6ht6CSZy7XiRJawvZC33fljy6h6lWr1bqVne1RY00NvjaNuJbHtVYogmp1vtnMqwEL9ftt6PdakWXrnz3cLn1Vvjyrk92e5A34B0HAGI2J6sq+wePGz+XW/cMgSQaLYH+QuXz/q5P8KntzshMLltt58PkfxYJhcpeSksld8HH5OWCPg9SCfTojv//yz2Y+f3wdJFPV/7Vjvw8LHnap5abKPxeS3vADugXrD6nVpSS0WHVIs+7pCws+cdcwXmVfn5ZBfZVaXsgslYLNijIOti9ydN6pY/T3l+1gt1sE82Tq5RyWkc+iYUymkhTy4f6xXg1+MWEZzc364/12IC/FazX4urucSaoFbEkZk7L/D99eN5xyHlTrweb124NMR0WLILDqT7vXSxpCiVUfVUaVMplcPW2Xi+Hwfjj8ttw+rAb6KBUsH2kis8fd9sKGUGLV+XClciRN0Nj+yGpoqRs1WDz9hz30jLCg/n2x2h1SHqRSu9Xie93kYpvLDCjRcjm/366OR1Dem6vl1/nxOnux+RRGa4u1eRkujOHLxqJ157JD/YTR7rDH2V+WDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgL/cv9GiDU/+UZ+oAAAAASUVORK5CYII=" alt="project" />
            <div>
              Lorem ipsum dolor sit amet
            </div>
          </Project>

          <Project>
            <img src="data:image/png;base64,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" alt="project" />
            <div>
              Lorem ipsum dolor sit amet
            </div>
          </Project>
        </ListProjects>
      </Content>
    </Container>
  );
}
