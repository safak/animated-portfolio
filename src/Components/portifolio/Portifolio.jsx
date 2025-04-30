import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./portifolio.scss";

const projects = [
  {
    img: "/Img/Projeto RodianStore.png",
    alt: "Projeto Carros de Luxo",
    title: "Rodian Store",
    description: "Loja virtual moderna com React + Firebase",
  },
  {
    img: "/Img/Projeto Vox Elements.png",
    alt: "Checkout Greenn",
    title: "Vox Elements",
    description: "Interface interativa para e-commerce sustentável",
  },
  {
    img: "/Img/slide3.png",
    alt: "Dashboard Workday",
    title: "Workday Dashboard",
    description: "Painel administrativo com gráficos dinâmicos",
  },
];

export default function SlidePortfolio() {
  return (
    <section className="slide-portfolio">
      <h2 className="title">Projetos Recentes</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 4000 }}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="swiper-container"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index} className="slide-item">
            <img src={project.img} alt={project.alt} />
            <div className="preview-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
