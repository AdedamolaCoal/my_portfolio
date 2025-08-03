// CV Download utility functions

export const downloadCV = () => {
  // Method 1: Direct file download (if CV is in public folder)
  const cvUrl = "/assets/adedamola_cv.pdf";

  // Create a temporary link element
  const link = document.createElement("a");
  link.href = cvUrl;
  link.download = "adedamola_cv.pdf";
  link.target = "_blank";

  // Append to body, click, and remove
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Alternative method using fetch (if CV is hosted elsewhere)
// export const downloadCVFromURL = async (cvUrl: string, filename: string) => {
//   try {
//     const response = await fetch(cvUrl);
//     const blob = await response.blob();

//     // Create blob URL
//     const blobUrl = window.URL.createObjectURL(blob);

//     // Create download link
//     const link = document.createElement("a");
//     link.href = blobUrl;
//     link.download = filename;

//     // Trigger download
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     // Clean up blob URL
//     window.URL.revokeObjectURL(blobUrl);
//   } catch (error) {
//     console.error("Error downloading CV:", error);
//     // Fallback to direct link
//     window.open(cvUrl, "_blank");
//   }
// };

// Method for opening CV in new tab
export const openCVInNewTab = () => {
  const cvUrl = "/assets/adedamola_cv.pdf";
  window.open(cvUrl, "_blank");
};
