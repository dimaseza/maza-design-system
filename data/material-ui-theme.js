// referrence https://mui.com/material-ui/customization/default-theme/

export const theme = createTheme({
  typography: {
    fontFamily       : ["Inter" , "Poppins" , "sans-serif"],
    fontSize         : 14,
    fontWeightRegular: 400,
    fontWeightMedium : 500,
    fontWeightBold   : 700,
    h1: {
      fontSize: 48,
      lineHeight: "60px",
    },
    h2: {
      fontSize: 40,
      lineHeight: "56px",
    },
    h3: {
      fontSize: 24,
      lineHeight: "34px",
    },
    title: {
      fontSize: 20,
      lineHeight: "36px",
    },
    bodyL: {
      fontSize: 16,
      lineHeight: "28px",
    },
    bodyM: {
      fontSize: 14,
      lineHeight: "28px",
    },
    bodyS: {
      fontSize: 12,
      lineHeight: "22px",
    },
    caption: {
      fontSize: 10,
      lineHeight: "24px",
    }
  },
  palette: {
    primary: {
      main : "#FF5100",
      light: "#E84900",
      dark : "#A33C0D",
    },
    secondary: {
      main : "#002169",
      light: "#082361",
      dark : "#011645"
    },
    turqoise: {
      main : "#6BDAD5",
      light: "#55C9C3",
      dark : "#34807B",
    },
    error: {
      main : "#CB3A31",
      light: "#BD251C",
      dark : "#731912"
    },
    warning: {
      main : "#CD7B2E",
      light: "#BF6919",
      dark : "#734011"
    },
    success: {
      main : "#43936C",
      light: "#367A59",
      dark : "#20573D"
    },
    info: {
      main : "#3267E3",
      light: "#114CD6",
      dark : "#11317D"
    },
    grey: {
      100: "#DCDCDC",
      200: "#D6D6D5",
      300: "#CACAC9",
      400: "#B0B1AE",
      500: "#91938F",
      600: "#6E6F6A",
      700: "#5D5E58",
      800: "#40423A",
      900: "#090C02",
    },
    text: {
      primary: "#090C02",
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          textTransform: "capitalize",
          fontWeight: "medium",
          boxShadow: 'none',
          fontSize: 14,
          borderRadius: "6px",
          padding: "10px 16px",
          width: "160px",
          height: "44px",
          ":disabled": {
            color: "#91938F",
            backgroundColor: "#CACAC9",
          },
          ":hover": {
            boxShadow: "none",
          }
        },
        sizeLarge: {
          height: "48px"
        },
        containedPrimary: {
          ":hover": {
            backgroundColor: "#E84900",
          },
          ":active": {
            backgroundColor: "#A33C0D",
          },
          ":focus": {
            boxShadow: '0px 0px 0px 3px rgba(255, 81, 0, 0.2)',
          },
          "&.loading:disabled": {
            backgroundColor: "#FF5100",
            color: "#fff",
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
              display: "none"
            }
          }
        },
        containedSecondary: {
          ":hover": {
            backgroundColor: "#082361",
          },
          ":active": {
            backgroundColor: "#011645",
          },
          ":focus": {
            boxShadow: '0px 0px 0px 3px rgba(0, 33, 105, 0.2)',
          },
          "&.loading:disabled": {
            backgroundColor: "#002169",
            color: "#fff",
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
              display: "none"
            }
          }
        },
        containedError: {
          ":hover": {
            backgroundColor: "#BD251C",
          },
          ":active": {
            backgroundColor: "#731912",
          },
          ":focus": {
            boxShadow: '0px 0px 0px 3px #EEB3B0',
          },
          "&.loading:disabled": {
            backgroundColor: "#CB3A31",
            color: "#fff",
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
              display: "none"
            }
          }
        },
        textPrimary: {
          width: "auto",
          ":focus": {
            boxShadow: '0px 0px 0px 3px rgba(255, 81, 0, 0.2)',
          },
          ":active": {
            color: "#A33C0D",
          },
          ":disabled": {
            backgroundColor: "inherit",
            color: "#91938F"
          },
          "&.loading:disabled": {
            color: "#FF5100",
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
              display: "none"
            }
          }
        },
        outlinedPrimary: {
          border: "1px solid #090C02",
          color: "#090C02",
          ":hover": {
            border: "1px solid #CACAC9",
            backgroundColor: "#DCDCDC",
          },
          ":focus": {
            backgroundColor: "#fff",
            border: "1px solid #FF5100",
            boxShadow: '0px 0px 0px 3px rgba(255, 81, 0, 0.2)',
          },
          ":active": {
            boxShadow: "none",
            backgroundColor: "#D6D6D5",
            border: "1px solid #B0B1AE",
          },
          ":disabled": {
            color: "#91938F",
            backgroundColor: "#CACAC9"
          },
          "&.loading:disabled": {
            color: "#090C02",
            backgroundColor: "#ffffff",
            border: "1px solid #CACAC9",
            "& .MuiButton-startIcon, & .MuiButton-endIcon": {
              display: "none"
            }
          }
        },
      },
    },
    MuiCircularProgress: {
      defaultProps: {
        color: "inherit",
        thickness: 6,
        size: 22,
        disableShrink: true,
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "block",
          marginBottom: 16,
        },
      }
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "#40423A",
          fontSize: 14,
          lineHeight:"24px",
          marginBottom: 8,
        }
      }
    },
    MuiInputBase: {
      defaultProps: {
        fullWidth: true,
        placeholder: "Placeholder"
      },
      styleOverrides: {
        root: {
          height: "44px",
          boxSizing: "border-box",
          border: "1px solid #B0B1AE",
          borderRadius: "6px",
          padding: "10px 16px",
          fontSize: "14px",
          lineHeight: "24px",
          transition: ".25s",
          ":hover": {
            border: "1px solid #FF5100",
          },
          "&.Mui-focused": {
            border: "1px solid #FF5100",
            boxShadow: '0px 0px 0px 3px rgba(255, 81, 0, 0.2)',
          },
          "&.Mui-disabled": {
            backgroundColor: "#DCDCDC",
            color: "#91938F",
            ":hover": {
              border: "1px solid #B0B1AE",
            },
          },
          "&.error": {
            border: "1px solid #CB3A31",
          },
          "&.error.Mui-disabled": {
            border: "1px solid #B0B1AE",
          }
        },
      }
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          position: "absolute",
          fontSize: 12,
          "&.error": {
            color: "#CB3A31",
          },
          "&.success": {
            color: "#43936C",
          },
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          color: "#40423A",
          fontSize: "16px",
          lineHeight: "28px",
        }
      }
    },
    MuiCheckbox: {
      defaultProps: {
        icon: <img src={CheckboxUncheckIcon} alt="checkbox icon" />,
        checkedIcon: <img src={CheckboxCheckedIcon} alt="checked icon" />,
        disableRipple: true,
      }
    },
    MuiRadio: {
      defaultProps: {
        icon: <img src={RadioOffIcon} alt="radio icon" />,
        checkedIcon: <img src={RadioOnIcon} alt="radio icon" />,
        disableRipple: true,
      }
    },
    MuiTab: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          transition: ".25s",
          textTransform: "capitalize",
          fontSize: 16,
          fontWeight: 600,
          lineHeight: "28px",
          display: "block",
          ":hover": {
            backgroundColor: "#FFF7F2"
          },
          
        },
      }
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTabs-indicator": {
            height: "4px",
            transition: ".5s",
          },
        }
      }
    },
    MuiGrid: {
      defaultProps: {
        wrap: "nowrap",
        columnGap: 2,
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: "24px",
          borderRadius: "6px",
          boxShadow: "0px 4px 10px rgba(9, 12, 2, 0.1)",
        }
      }
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none"
        }
      }
    },
    MuiModal: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& .modal-box": {
            background: "#fff",
            minWidth: "200px",
            minHeight: "100px",
            outline: "none",
            boxSizing: "border-box",
            borderRadius: "6px",
            padding: "24px",
          }
        }
      }
    },
    MuiStepLabel: {
      defaultProps: {
        StepIconComponent: ColorlibStepIcon
      }
    },
    MuiStepIcon: {
      styleOverrides: {
        root: {
          width: "40px",
          height: "40px",
          borderRadius: "50%",
          "&.MuiSvgIcon-root": {
            color: "#DCDCDC"
          },
          "&.MuiSvgIcon-root .MuiStepIcon-text": {
            fill: "#40423A",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "40px",
          },
          "&.MuiSvgIcon-root.Mui-active": {
            color: "#F5FFFF",
            border: "4px solid rgba(0, 33, 105, 0.2)",
          },
          "&.MuiSvgIcon-root.Mui-completed": {
            color: "#F5FFFF",
            border: "4px solid rgba(107, 218, 213, 0.2)",
            fill: "#43936C",
          },
        }
      }
    },
    MuiStepConnector: {
      styleOverrides: {
        lineVertical: {
          borderColor: '#DCDCDC',
          borderWidth: '4px',
          transform: "translateX(5px)",
          height: "56px"
        }
      }
    }
  }
})