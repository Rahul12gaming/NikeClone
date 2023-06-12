export const setToast = (
    toast,
    title,
    status,
    duration = 2000,
    description
  ) => {
    return(
    toast({
      title,
      description,
      status,
      duration,
      isClosable: true,
      position: "top",
    })
    )
  };
  export const shortString = (text, limit = 15) => {
  return text.slice(0, limit) + (text.length > limit ? "..." : "");
};