// export const SignUpDataToServer = async(formData)=>{
//     try {
//         const response = await fetch("http://localhost:3000/signup", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
  
//         if (response.ok) {
//             console.log("Form submitted:", formData);
//           // You might want to redirect or perform other actions on successful form submission
//         } else {
//           console.error("Form submission failed");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       }
// }

// export const LogInDataToServer = async(formData)=>{
//     try {
//         const response = await fetch("http://localhost:3000/login", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(formData),
//         });
  
//         if (response.ok) {
//             console.log("Form submitted:", formData);
//           // You might want to redirect or perform other actions on successful form submission
//         } else {
//           console.error("Form submission failed");
//         }
//       } catch (error) {
//         console.error("Error submitting form:", error);
//       }
// }