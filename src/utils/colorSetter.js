export const colorSetter = (status) => {
    switch (status) {
      case "online":
        return "success";
      case "offline":
        return "default";
      case "DND":
        return "error";
      case "away":
        return "warning";
      default:
        break;
    }
  };