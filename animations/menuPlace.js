import { animate } from "animejs";

// Asegúrate de que el menú tenga position: fixed o absolute y un left inicial fuera de pantalla
animate('.nav-cont', { x:"100px", duration: 1000,ease:'outCubic' });
