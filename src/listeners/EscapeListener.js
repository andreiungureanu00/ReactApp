import React from "react";
import { useState, useEffect } from "react";

function EscapeListener(callback) {
  useEffect(() => {
    const handler = function (event) {
      if (event.key === "Escape") {
        callback();
      }
    };
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}

export default EscapeListener;
