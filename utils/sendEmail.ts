export const sendEmail = async (inputValues: {
  firstName: String;
  lastName: String;
  num: String;
  message: String;
  email: String;
}): Promise<{ message: string }> => {
  try {
    console.log(inputValues);

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
  } catch (error) {
    throw error;
  }
};
