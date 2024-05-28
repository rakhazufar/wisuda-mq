"use client";

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";

const Timer = styled(Typography)(() => ({
  fontSize: "33px",
  fontWeight: "bold",
}));

const Colon = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "bold",
  color: "#E07575",
}));

export default function Countdown() {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "June, 1, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pb: 0,
      }}
    >
      <Typography>Menuju Wisuda:</Typography>
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
        <Box>
          <Timer>{days < 10 ? "0" + days : days}</Timer>
        </Box>
        <Colon>:</Colon>
        <Box>
          <Timer>{hours < 10 ? "0" + hours : hours}</Timer>
        </Box>
        <Colon>:</Colon>
        <Box>
          <Timer>{minutes < 10 ? "0" + minutes : minutes}</Timer>
        </Box>
        <Colon>:</Colon>
        <Box>
          <Timer>{seconds < 10 ? "0" + seconds : seconds}</Timer>
        </Box>
      </Box>
    </Box>
  );
}
