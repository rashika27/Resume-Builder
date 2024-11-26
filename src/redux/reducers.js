const initialState = {
    userInfo: {
      name: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      education: "",
      workExperience: "",
      skills: [],
      projects: [],
      profileSummary: "",
    },
    theme: "light",
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_USER_INFO":
        return { ...state, userInfo: action.payload };
      case "TOGGLE_THEME":
        return { ...state, theme: state.theme === "light" ? "dark" : "light" };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  