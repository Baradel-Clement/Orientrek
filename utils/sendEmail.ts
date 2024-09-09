export const sendEmail = async (
  inputValues: {
    firstName: String;
    lastName: String;
    num: String;
    message: String;
    email: String;
  },
  reservation: {
    isReservation: boolean;
  }
): Promise<{ message: string }> => {
  try {
    if (!reservation.isReservation) {
      let res = await fetch("api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(inputValues),
      });
      const data = res.json();
      if (!res.ok) {
        throw data;
      }
      return data;
    } else {
      let res = await fetch("api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ inputValues, reservation }),
      });
      const data = res.json();
      if (!res.ok) {
        throw data;
      }
      return data;
    }
  } catch (error) {
    throw error;
  }
};
