import { Box, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Lesley from "../../../Assets/lesley.png";
import Ahmad from "../../../Assets/ahmad.png";
import Heena from "../../../Assets/heena.png";
import Ankur from "../../../Assets/ankur.png";
import Steven from "../../../Assets/ahmad-stevens.png";
import SpecialistCard from "./SpecialistCard";
import { Autoplay, Pagination } from "swiper/modules";

export default function Specialists() {
    const specialist_data = [
        { img: Lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
        { img: Ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
        { img: Heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
        { img: Ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
        { img: Steven, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
        { img: Lesley, title: "Dr. Lesley Hull", designation: "Medicine" },
        { img: Ahmad, title: "Dr. Ahmad Khan", designation: "Neurologist" },
        { img: Heena, title: "Dr. Heena Sachdeva", designation: "Orthopadics" },
        { img: Ankur, title: "Dr. Ankur Sharma", designation: "Medicine" },
        { img: Steven, title: "Dr. Ahmad Stevens", designation: "Neurologist" },
    ];

    return (
        <Box py={4} id="find-doctors">
            <Typography variant="h2" textAlign="center" mb={3} px={2}>
                Our Medical Specialist
            </Typography>
            <Swiper
                slidesPerView={2}
                spaceBetween={20}
                loop={true}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    767: {
                        slidesPerView: 4,
                    },
                }}
            >
                {specialist_data.map((doc, index) => (
                    <SwiperSlide key={index}>
                        <SpecialistCard
                            img={doc.img}
                            title={doc.title}
                            designation={doc.designation}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </Box>
    );
}
