import { Box, Button, Container, Grid, Typography } from "@mui/material";
import IconCard from "../../IconCard/IconCard";
import DrugStore from "../../../Assets/Drugstore.png";
import PrimaryCare from "../../../Assets/primary-care.png";
import Cardiology from "../../../Assets/cardiology.png";
import Mri from "../../../Assets/mri.png";
import BloodTest from "../../../Assets/blood-test.png";
import Piscologist from "../../../Assets/piscologist.png";
import XRay from "../../../Assets/X-Ray.png";

export default function Specialization() {
    const data = [
        { icon: DrugStore, title: "Dentistry" },
        { icon: PrimaryCare, title: "Primary Care" },
        { icon: Cardiology, title: "Cardiology" },
        { icon: Mri, title: "MRI Resonance" },
        { icon: BloodTest, title: "Blood Test" },
        { icon: Piscologist, title: "Piscologist" },
        { icon: DrugStore, title: "Laboratory" },
        { icon: XRay, title: "X-Ray" },
    ];

    return (
        <Box py={6} sx={{ background: "linear-gradient(#E7F0FF, #E8F1FF)" }}>
            <Container sx={{ textAlign: "center" }}>
                <Typography variant="h2" mb={4}>
                    Find by specialisation
                </Typography>

                <Grid
                    container
                    spacing={{ xs: 1, md: 3 }}
                    mb={5}
                    justifyContent={"center"}
                >
                    {data.map((item) => (
                        <Grid item xs={4} md={3} key={item.title}>
                            <IconCard
                                img={item.icon}
                                title={item.title}
                                bgColor={"#FFFFFF"}
                                shadow={true}
                            />
                        </Grid>
                    ))}
                </Grid>

                <Button variant="contained" size="large" disableElevation>
                    View All
                </Button>
            </Container>
        </Box>
    );
}
