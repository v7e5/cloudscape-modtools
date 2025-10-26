export const preset = {
  theme: {
    id: 'classic',
    selector: ':root',
    modes: {
      color: {
        id: 'color',
        states: {
          light: {
            default: true
          },
          dark: {
            selector: '.awsui-dark-mode',
            media: 'not print'
          }
        }
      },
      density: {
        id: 'density',
        states: {
          comfortable: {
            default: true
          },
          compact: {
            selector: '.awsui-compact-mode'
          }
        }
      },
      motion: {
        id: 'motion',
        states: {
          default: {
            default: true
          },
          disabled: {
            selector: '.awsui-motion-disabled'
          }
        }
      }
    },
    tokens: {
      colorAmazonOrange: '#ff9900',
      colorAwsSquidInk: '#232f3e',
      colorBlack: '#000000',
      colorBlue100: '#f1faff',
      colorBlue200: '#d3e7f9',
      colorBlue300: '#99cbe4',
      colorBlue400: '#44b9d6',
      colorBlue500: '#00a1c9',
      colorBlue600: '#0073bb',
      colorBlue700: '#0a4a74',
      colorBlue800: '#033160',
      colorBlue900: '#12293b',
      colorBlueOpaque: 'rgba(51, 136, 221, 0.5)',
      colorGreen100: '#f2f8f0',
      colorGreen500: '#6aaf35',
      colorGreen600: '#1d8102',
      colorGreen700: '#1a520f',
      colorGreen900: '#172211',
      colorGrey100: '#fafafa',
      colorGrey125: '#f8f8f8',
      colorGrey150: '#f2f3f3',
      colorGrey200: '#eaeded',
      colorGrey300: '#d5dbdb',
      colorGrey350: '#b6bec9',
      colorGrey400: '#aab7b8',
      colorGrey450: '#95a5a6',
      colorGrey500: '#879596',
      colorGrey550: '#687078',
      colorGrey600: '#545b64',
      colorGrey650: '#414750',
      colorGrey700: '#2a2e33',
      colorGrey750: '#21252c',
      colorGrey800: '#1a2029',
      colorGrey850: '#081120',
      colorGrey900: '#16191f',
      colorGrey950: '#222222',
      colorOrange100: '#fef6f0',
      colorOrange500: '#ec7211',
      colorOrange600: '#eb5f07',
      colorOrange700: '#dd6b10',
      colorPurple400: '#bf80ff',
      colorPurple600: '#7300e5',
      colorRed100: '#fdf3f1',
      colorRed500: '#ff5d64',
      colorRed600: '#d13212',
      colorRed700: '#7c2718',
      colorRed900: '#270a11',
      colorTransparent: 'transparent',
      colorWhite: '#ffffff',
      colorYellow100: '#fffce9',
      colorYellow600: '#ffe457',
      colorYellow700: '#e0ca57',
      colorYellow800: '#906806',
      colorYellow900: '#1d1906',
      colorChartsRed300: {
        light: '#ea7158',
        dark: '#d63f38'
      },
      colorChartsRed400: {
        light: '#dc5032',
        dark: '#ed5958'
      },
      colorChartsRed500: {
        light: '#d13313',
        dark: '#fe6e73'
      },
      colorChartsRed600: {
        light: '#ba2e0f',
        dark: '#ff8a8a'
      },
      colorChartsRed700: {
        light: '#a82a0c',
        dark: '#ffa09e'
      },
      colorChartsRed800: {
        light: '#972709',
        dark: '#ffb3b0'
      },
      colorChartsRed900: {
        light: '#892407',
        dark: '#ffc4c0'
      },
      colorChartsRed1000: {
        light: '#7d2105',
        dark: '#ffd2cf'
      },
      colorChartsRed1100: {
        light: '#721e03',
        dark: '#ffe0dd'
      },
      colorChartsRed1200: {
        light: '#671c00',
        dark: '#ffecea'
      },
      colorChartsOrange300: {
        light: '#e07941',
        dark: '#c55305'
      },
      colorChartsOrange400: {
        light: '#cc5f21',
        dark: '#de6923'
      },
      colorChartsOrange500: {
        light: '#bc4d01',
        dark: '#f27c36'
      },
      colorChartsOrange600: {
        light: '#a84401',
        dark: '#f89256'
      },
      colorChartsOrange700: {
        light: '#983c02',
        dark: '#fca572'
      },
      colorChartsOrange800: {
        light: '#8a3603',
        dark: '#ffb68b'
      },
      colorChartsOrange900: {
        light: '#7e3103',
        dark: '#ffc6a4'
      },
      colorChartsOrange1000: {
        light: '#732c02',
        dark: '#ffd4bb'
      },
      colorChartsOrange1100: {
        light: '#692801',
        dark: '#ffe1cf'
      },
      colorChartsOrange1200: {
        light: '#602400',
        dark: '#ffede2'
      },
      colorChartsYellow300: {
        light: '#b2911c',
        dark: '#977001'
      },
      colorChartsYellow400: {
        light: '#9c7b0b',
        dark: '#b08400'
      },
      colorChartsYellow500: {
        light: '#8a6b05',
        dark: '#c59600'
      },
      colorChartsYellow600: {
        light: '#7b5f04',
        dark: '#d3a61c'
      },
      colorChartsYellow700: {
        light: '#6f5504',
        dark: '#dfb52c'
      },
      colorChartsYellow800: {
        light: '#654d03',
        dark: '#eac33a'
      },
      colorChartsYellow900: {
        light: '#5d4503',
        dark: '#f1cf65'
      },
      colorChartsYellow1000: {
        light: '#553f03',
        dark: '#f7db8a'
      },
      colorChartsYellow1100: {
        light: '#4d3901',
        dark: '#fce5a8'
      },
      colorChartsYellow1200: {
        light: '#483300',
        dark: '#ffefc9'
      },
      colorChartsGreen300: {
        light: '#67a353',
        dark: '#48851a'
      },
      colorChartsGreen400: {
        light: '#41902c',
        dark: '#5a9b29'
      },
      colorChartsGreen500: {
        light: '#1f8104',
        dark: '#69ae34'
      },
      colorChartsGreen600: {
        light: '#1a7302',
        dark: '#7dbd4c'
      },
      colorChartsGreen700: {
        light: '#176702',
        dark: '#8fca61'
      },
      colorChartsGreen800: {
        light: '#145d02',
        dark: '#9fd673'
      },
      colorChartsGreen900: {
        light: '#125502',
        dark: '#b2df8d'
      },
      colorChartsGreen1000: {
        light: '#104d01',
        dark: '#c5e7a8'
      },
      colorChartsGreen1100: {
        light: '#0f4601',
        dark: '#d5efbe'
      },
      colorChartsGreen1200: {
        light: '#0d4000',
        dark: '#e4f7d5'
      },
      colorChartsTeal300: {
        light: '#2ea597',
        dark: '#018977'
      },
      colorChartsTeal400: {
        light: '#1c8e81',
        dark: '#009d89'
      },
      colorChartsTeal500: {
        light: '#0d7d70',
        dark: '#00b09b'
      },
      colorChartsTeal600: {
        light: '#096f64',
        dark: '#40bfa9'
      },
      colorChartsTeal700: {
        light: '#06645a',
        dark: '#5fccb7'
      },
      colorChartsTeal800: {
        light: '#045b52',
        dark: '#77d7c3'
      },
      colorChartsTeal900: {
        light: '#03524a',
        dark: '#94e0d0'
      },
      colorChartsTeal1000: {
        light: '#014b44',
        dark: '#ace9db'
      },
      colorChartsTeal1100: {
        light: '#01443e',
        dark: '#c2f0e6'
      },
      colorChartsTeal1200: {
        light: '#003e38',
        dark: '#d7f7f0'
      },
      colorChartsBlue1300: {
        light: '#529ccb',
        dark: '#00819c'
      },
      colorChartsBlue1400: {
        light: '#3184c2',
        dark: '#0497ba'
      },
      colorChartsBlue1500: {
        light: '#0273bb',
        dark: '#08aad2'
      },
      colorChartsBlue1600: {
        light: '#0166ab',
        dark: '#44b9dd'
      },
      colorChartsBlue1700: {
        light: '#015b9d',
        dark: '#63c6e7'
      },
      colorChartsBlue1800: {
        light: '#015292',
        dark: '#79d2f0'
      },
      colorChartsBlue1900: {
        light: '#014a87',
        dark: '#98dcf5'
      },
      colorChartsBlue11000: {
        light: '#01437d',
        dark: '#b3e4f8'
      },
      colorChartsBlue11100: {
        light: '#003c75',
        dark: '#caedfc'
      },
      colorChartsBlue11200: {
        light: '#00366d',
        dark: '#ddf4ff'
      },
      colorChartsBlue2300: {
        light: '#688ae8',
        dark: '#486de8'
      },
      colorChartsBlue2400: {
        light: '#5978e3',
        dark: '#6384f5'
      },
      colorChartsBlue2500: {
        light: '#4066df',
        dark: '#7698fe'
      },
      colorChartsBlue2600: {
        light: '#3759ce',
        dark: '#8ea9ff'
      },
      colorChartsBlue2700: {
        light: '#314fbf',
        dark: '#a2b8ff'
      },
      colorChartsBlue2800: {
        light: '#2c46b1',
        dark: '#b1c5ff'
      },
      colorChartsBlue2900: {
        light: '#273ea5',
        dark: '#c3d1ff'
      },
      colorChartsBlue21000: {
        light: '#23379b',
        dark: '#d2dcff'
      },
      colorChartsBlue21100: {
        light: '#1f3191',
        dark: '#dfe6ff'
      },
      colorChartsBlue21200: {
        light: '#1b2b88',
        dark: '#ecf0ff'
      },
      colorChartsPurple300: {
        light: '#a783e1',
        dark: '#8d59de'
      },
      colorChartsPurple400: {
        light: '#9469d6',
        dark: '#a173ea'
      },
      colorChartsPurple500: {
        light: '#8456ce',
        dark: '#b088f5'
      },
      colorChartsPurple600: {
        light: '#7749bf',
        dark: '#bf9bf9'
      },
      colorChartsPurple700: {
        light: '#6b40b2',
        dark: '#cbabfc'
      },
      colorChartsPurple800: {
        light: '#6237a7',
        dark: '#d6baff'
      },
      colorChartsPurple900: {
        light: '#59309d',
        dark: '#dfc8ff'
      },
      colorChartsPurple1000: {
        light: '#512994',
        dark: '#e8d5ff'
      },
      colorChartsPurple1100: {
        light: '#4a238b',
        dark: '#efe2ff'
      },
      colorChartsPurple1200: {
        light: '#431d84',
        dark: '#f5edff'
      },
      colorChartsPink300: {
        light: '#da7596',
        dark: '#c64a70'
      },
      colorChartsPink400: {
        light: '#ce567c',
        dark: '#d56889'
      },
      colorChartsPink500: {
        light: '#c33d69',
        dark: '#e07f9d'
      },
      colorChartsPink600: {
        light: '#b1325c',
        dark: '#eb92ad'
      },
      colorChartsPink700: {
        light: '#a32952',
        dark: '#f5a2bb'
      },
      colorChartsPink800: {
        light: '#962249',
        dark: '#ffb0c8'
      },
      colorChartsPink900: {
        light: '#8b1b42',
        dark: '#ffc1d4'
      },
      colorChartsPink1000: {
        light: '#81143b',
        dark: '#ffd1de'
      },
      colorChartsPink1100: {
        light: '#780d35',
        dark: '#ffdfe8'
      },
      colorChartsPink1200: {
        light: '#6f062f',
        dark: '#ffecf1'
      },
      colorChartsStatusCritical: {
        light: '{colorChartsRed1000}',
        dark: '{colorChartsRed300}'
      },
      colorChartsStatusHigh: {
        light: '{colorChartsRed600}',
        dark: '{colorChartsRed500}'
      },
      colorChartsStatusMedium: {
        light: '{colorChartsOrange400}',
        dark: '{colorChartsOrange600}'
      },
      colorChartsStatusLow: {
        light: '{colorChartsYellow300}',
        dark: '{colorChartsYellow700}'
      },
      colorChartsStatusPositive: {
        light: '{colorChartsGreen300}',
        dark: '{colorChartsGreen500}'
      },
      colorChartsStatusInfo: {
        light: '{colorChartsBlue1400}',
        dark: '{colorChartsBlue1500}'
      },
      colorChartsStatusNeutral: {
        light: '{colorGrey500}',
        dark: '{colorGrey500}'
      },
      colorChartsThresholdNegative: {
        light: '{colorRed600}',
        dark: '{colorRed500}'
      },
      colorChartsThresholdPositive: {
        light: '{colorGreen600}',
        dark: '{colorGreen500}'
      },
      colorChartsThresholdInfo: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorChartsThresholdNeutral: {
        light: '{colorGrey550}',
        dark: '{colorGrey450}'
      },
      colorChartsLineGrid: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorChartsLineTick: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorChartsLineAxis: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorChartsPaletteCategorical1: {
        light: '{colorChartsBlue2300}',
        dark: '{colorChartsBlue2300}'
      },
      colorChartsPaletteCategorical2: {
        light: '{colorChartsPink500}',
        dark: '{colorChartsPink500}'
      },
      colorChartsPaletteCategorical3: {
        light: '{colorChartsTeal300}',
        dark: '{colorChartsTeal300}'
      },
      colorChartsPaletteCategorical4: {
        light: '{colorChartsPurple500}',
        dark: '{colorChartsPurple500}'
      },
      colorChartsPaletteCategorical5: {
        light: '{colorChartsOrange300}',
        dark: '{colorChartsOrange300}'
      },
      colorChartsPaletteCategorical6: {
        light: '{colorChartsBlue2600}',
        dark: '{colorChartsBlue2600}'
      },
      colorChartsPaletteCategorical7: {
        light: '{colorChartsPink800}',
        dark: '{colorChartsPink800}'
      },
      colorChartsPaletteCategorical8: {
        light: '{colorChartsTeal600}',
        dark: '{colorChartsTeal600}'
      },
      colorChartsPaletteCategorical9: {
        light: '{colorChartsPurple800}',
        dark: '{colorChartsPurple800}'
      },
      colorChartsPaletteCategorical10: {
        light: '{colorChartsOrange600}',
        dark: '{colorChartsOrange600}'
      },
      colorChartsPaletteCategorical11: {
        light: '{colorChartsBlue2900}',
        dark: '{colorChartsBlue2900}'
      },
      colorChartsPaletteCategorical12: {
        light: '{colorChartsPink1100}',
        dark: '{colorChartsPink1100}'
      },
      colorChartsPaletteCategorical13: {
        light: '{colorChartsTeal900}',
        dark: '{colorChartsTeal900}'
      },
      colorChartsPaletteCategorical14: {
        light: '{colorChartsPurple1100}',
        dark: '{colorChartsPurple1100}'
      },
      colorChartsPaletteCategorical15: {
        light: '{colorChartsOrange900}',
        dark: '{colorChartsOrange900}'
      },
      colorChartsPaletteCategorical16: {
        light: '{colorChartsBlue21200}',
        dark: '{colorChartsBlue21200}'
      },
      colorChartsPaletteCategorical17: {
        light: '{colorChartsPink400}',
        dark: '{colorChartsPink400}'
      },
      colorChartsPaletteCategorical18: {
        light: '{colorChartsTeal1200}',
        dark: '{colorChartsTeal1200}'
      },
      colorChartsPaletteCategorical19: {
        light: '{colorChartsPurple400}',
        dark: '{colorChartsPurple400}'
      },
      colorChartsPaletteCategorical20: {
        light: '{colorChartsOrange1200}',
        dark: '{colorChartsOrange1200}'
      },
      colorChartsPaletteCategorical21: {
        light: '{colorChartsBlue2500}',
        dark: '{colorChartsBlue2500}'
      },
      colorChartsPaletteCategorical22: {
        light: '{colorChartsPink700}',
        dark: '{colorChartsPink700}'
      },
      colorChartsPaletteCategorical23: {
        light: '{colorChartsTeal500}',
        dark: '{colorChartsTeal500}'
      },
      colorChartsPaletteCategorical24: {
        light: '{colorChartsPurple700}',
        dark: '{colorChartsPurple700}'
      },
      colorChartsPaletteCategorical25: {
        light: '{colorChartsOrange500}',
        dark: '{colorChartsOrange500}'
      },
      colorChartsPaletteCategorical26: {
        light: '{colorChartsBlue2800}',
        dark: '{colorChartsBlue2800}'
      },
      colorChartsPaletteCategorical27: {
        light: '{colorChartsPink1000}',
        dark: '{colorChartsPink1000}'
      },
      colorChartsPaletteCategorical28: {
        light: '{colorChartsTeal800}',
        dark: '{colorChartsTeal800}'
      },
      colorChartsPaletteCategorical29: {
        light: '{colorChartsPurple1000}',
        dark: '{colorChartsPurple1000}'
      },
      colorChartsPaletteCategorical30: {
        light: '{colorChartsOrange800}',
        dark: '{colorChartsOrange800}'
      },
      colorChartsPaletteCategorical31: {
        light: '{colorChartsBlue21100}',
        dark: '{colorChartsBlue21100}'
      },
      colorChartsPaletteCategorical32: {
        light: '{colorChartsPink300}',
        dark: '{colorChartsPink300}'
      },
      colorChartsPaletteCategorical33: {
        light: '{colorChartsTeal1100}',
        dark: '{colorChartsTeal1100}'
      },
      colorChartsPaletteCategorical34: {
        light: '{colorChartsPurple300}',
        dark: '{colorChartsPurple300}'
      },
      colorChartsPaletteCategorical35: {
        light: '{colorChartsOrange1100}',
        dark: '{colorChartsOrange1100}'
      },
      colorChartsPaletteCategorical36: {
        light: '{colorChartsBlue2400}',
        dark: '{colorChartsBlue2400}'
      },
      colorChartsPaletteCategorical37: {
        light: '{colorChartsPink600}',
        dark: '{colorChartsPink600}'
      },
      colorChartsPaletteCategorical38: {
        light: '{colorChartsTeal400}',
        dark: '{colorChartsTeal400}'
      },
      colorChartsPaletteCategorical39: {
        light: '{colorChartsPurple600}',
        dark: '{colorChartsPurple600}'
      },
      colorChartsPaletteCategorical40: {
        light: '{colorChartsOrange400}',
        dark: '{colorChartsOrange400}'
      },
      colorChartsPaletteCategorical41: {
        light: '{colorChartsBlue2700}',
        dark: '{colorChartsBlue2700}'
      },
      colorChartsPaletteCategorical42: {
        light: '{colorChartsPink900}',
        dark: '{colorChartsPink900}'
      },
      colorChartsPaletteCategorical43: {
        light: '{colorChartsTeal700}',
        dark: '{colorChartsTeal700}'
      },
      colorChartsPaletteCategorical44: {
        light: '{colorChartsPurple900}',
        dark: '{colorChartsPurple900}'
      },
      colorChartsPaletteCategorical45: {
        light: '{colorChartsOrange700}',
        dark: '{colorChartsOrange700}'
      },
      colorChartsPaletteCategorical46: {
        light: '{colorChartsBlue21000}',
        dark: '{colorChartsBlue21000}'
      },
      colorChartsPaletteCategorical47: {
        light: '{colorChartsPink1200}',
        dark: '{colorChartsPink1200}'
      },
      colorChartsPaletteCategorical48: {
        light: '{colorChartsTeal1000}',
        dark: '{colorChartsTeal1000}'
      },
      colorChartsPaletteCategorical49: {
        light: '{colorChartsPurple1200}',
        dark: '{colorChartsPurple1200}'
      },
      colorChartsPaletteCategorical50: {
        light: '{colorChartsOrange1000}',
        dark: '{colorChartsOrange1000}'
      },
      colorGreyOpaque25: {
        light: 'rgba(255, 255, 255, 0.25)',
        dark: 'rgba(255, 255, 255, 0.25)'
      },
      colorGreyOpaque40: {
        light: 'rgba(0, 0, 0, 0.4)',
        dark: 'rgba(0, 0, 0, 0.4)'
      },
      colorGreyOpaque50: {
        light: 'rgba(0, 0, 0, 0.5)',
        dark: 'rgba(0, 0, 0, 0.5)'
      },
      colorGreyOpaque70: {
        light: 'rgba(255, 255, 255, 0.7)',
        dark: 'rgba(255, 255, 255, 0.7)'
      },
      colorGreyOpaque80: {
        light: 'rgba(22, 25, 31, 0.8)',
        dark: 'rgba(22, 25, 31, 0.8)'
      },
      colorGreyOpaque90: {
        light: 'rgba(242, 243, 243, 0.9)',
        dark: 'rgba(242, 243, 243, 0.9)'
      },
      colorGreyTransparent: {
        light: 'rgba(0, 28, 36, 0.3)',
        dark: 'rgba(0, 0, 0, 0.3)'
      },
      colorGreyTransparentHeavy: {
        light: 'rgba(0, 28, 36, 0.5)',
        dark: 'rgba(0, 0, 0, 0.5)'
      },
      colorGreyTransparentLight: {
        light: 'rgba(0, 28, 36, 0.15)',
        dark: 'rgba(0, 0, 0, 0.3)'
      },
      colorBackgroundBadgeIcon: {
        light: '{colorRed600}',
        dark: '{colorRed500}'
      },
      colorBackgroundButtonLinkActive: {
        light: '{colorGrey200}',
        dark: '{colorGrey900}'
      },
      colorBackgroundButtonLinkHover: {
        light: '{colorGrey100}',
        dark: '{colorGrey750}'
      },
      colorBackgroundButtonNormalActive: {
        light: '{colorGrey200}',
        dark: '{colorGrey900}'
      },
      colorBackgroundButtonNormalDefault: {
        light: '{colorWhite}',
        dark: '{colorGrey700}'
      },
      colorBackgroundButtonNormalDisabled: {
        light: '{colorWhite}',
        dark: '{colorGrey700}'
      },
      colorBackgroundButtonNormalHover: {
        light: '{colorGrey100}',
        dark: '{colorGrey750}'
      },
      colorBackgroundButtonPrimaryActive: {
        light: '{colorBlue900}',
        dark: '{colorBlue400}'
      },
      colorBackgroundButtonPrimaryDefault: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorBackgroundButtonPrimaryDisabled: {
        light: '{colorWhite}',
        dark: '{colorGrey700}'
      },
      colorBackgroundButtonPrimaryHover: {
        light: '{colorBlue700}',
        dark: '{colorBlue500}'
      },
      colorBackgroundCalendarCurrentDate: {
        light: '{colorGrey150}',
        dark: '{colorGrey900}'
      },
      colorBackgroundCellShaded: {
        light: '{colorGrey150}',
        dark: '{colorGrey900}'
      },
      colorBackgroundCodeEditorGutterActiveLineDefault: {
        light: '{colorGrey550}',
        dark: '{colorGrey500}'
      },
      colorBackgroundCodeEditorGutterActiveLineError: {
        light: '{colorTextStatusError}',
        dark: '{colorTextStatusError}'
      },
      colorBackgroundCodeEditorGutterDefault: {
        light: '{colorGrey150}',
        dark: '{colorGrey750}'
      },
      colorBackgroundCodeEditorLoading: {
        light: '{colorBackgroundCodeEditorStatusBar}',
        dark: '{colorBackgroundCodeEditorStatusBar}'
      },
      colorBackgroundCodeEditorPaneItemHover: {
        light: '{colorGrey200}',
        dark: '{colorGrey650}'
      },
      colorBackgroundCodeEditorStatusBar: {
        light: '{colorGrey150}',
        dark: '{colorGrey750}'
      },
      colorBackgroundContainerContent: {
        light: '{colorWhite}',
        dark: '{colorGrey700}'
      },
      colorBackgroundContainerHeader: {
        light: '{colorGrey100}',
        dark: '{colorGrey750}'
      },
      colorBackgroundControlChecked: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBackgroundControlDefault: {
        light: '{colorWhite}',
        dark: '{colorGrey800}'
      },
      colorBackgroundControlDisabled: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorBackgroundDropdownItemDefault: {
        light: '{colorWhite}',
        dark: '{colorGrey700}'
      },
      colorBackgroundDropdownItemDimmed: {
        light: 'transparent',
        dark: 'transparent'
      },
      colorBackgroundDropdownItemFilterMatch: {
        light: '{colorBlue100}',
        dark: '{colorBlue900}'
      },
      colorBackgroundDropdownItemHover: {
        light: '{colorGrey150}',
        dark: '{colorGrey650}'
      },
      colorBackgroundDropdownItemSelected: {
        light: '{colorBackgroundItemSelected}',
        dark: '{colorBackgroundItemSelected}'
      },
      colorBackgroundHomeHeader: {
        light: '{colorBlack}',
        dark: '{colorBlack}'
      },
      colorBackgroundInputDefault: {
        light: '{colorWhite}',
        dark: '{colorGrey800}'
      },
      colorBackgroundInputDisabled: {
        light: '{colorGrey200}',
        dark: '{colorGrey650}'
      },
      colorBackgroundItemSelected: {
        light: '{colorBlue100}',
        dark: '{colorBlue900}'
      },
      colorBackgroundLayoutMain: {
        light: '{colorGrey150}',
        dark: '{colorGrey900}'
      },
      colorBackgroundLayoutMobilePanel: {
        light: '{colorBackgroundLayoutPanelContent}',
        dark: '{colorBackgroundLayoutPanelContent}'
      },
      colorBackgroundLayoutPanelContent: {
        light: '{colorBackgroundContainerContent}',
        dark: '{colorBackgroundContainerContent}'
      },
      colorBackgroundLayoutPanelHover: {
        light: '{colorGrey200}',
        dark: '{colorGrey650}'
      },
      colorBackgroundLayoutToggleActive: {
        light: '{colorGrey700}',
        dark: '{colorGrey700}'
      },
      colorBackgroundLayoutToggleDefault: {
        light: 'transparent',
        dark: 'transparent'
      },
      colorBackgroundLayoutToggleHover: {
        light: '{colorGrey600}',
        dark: '{colorGrey600}'
      },
      colorBackgroundLayoutToggleSelectedActive: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBackgroundLayoutToggleSelectedDefault: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorBackgroundLayoutToggleSelectedHover: {
        light: '{colorBlue700}',
        dark: '{colorBlue400}'
      },
      colorBackgroundModalOverlay: {
        light: '{colorGreyOpaque90}',
        dark: '{colorGreyOpaque80}'
      },
      colorBackgroundNotificationBlue: {
        light: '{colorBlue600}',
        dark: '{colorBlue600}'
      },
      colorBackgroundNotificationGreen: {
        light: '{colorGreen600}',
        dark: '{colorGreen600}'
      },
      colorBackgroundNotificationGrey: {
        light: '{colorGrey600}',
        dark: '{colorGrey550}'
      },
      colorBackgroundNotificationRed: {
        light: '{colorRed600}',
        dark: '{colorRed600}'
      },
      colorBackgroundNotificationYellow: {
        light: '{colorYellow600}',
        dark: '{colorYellow600}'
      },
      colorBackgroundNotificationStackBar: {
        light: '{colorGrey700}',
        dark: '{colorGrey700}'
      },
      colorBackgroundNotificationStackBarActive: {
        light: '{colorGrey700}',
        dark: '{colorGrey700}'
      },
      colorBackgroundNotificationStackBarHover: {
        light: '{colorGrey600}',
        dark: '{colorGrey600}'
      },
      colorBackgroundPopover: {
        light: '{colorWhite}',
        dark: '{colorGrey750}'
      },
      colorBackgroundProgressBarContentDefault: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBackgroundProgressBarContentInFlash: {
        light: '{colorGreyOpaque70}',
        dark: '{colorGrey100}'
      },
      colorBackgroundProgressBarLayoutDefault: {
        light: '{colorGrey200}',
        dark: '{colorGrey650}'
      },
      colorBackgroundProgressBarLayoutInFlash: {
        light: '{colorGreyOpaque25}',
        dark: '{colorGreyOpaque25}'
      },
      colorBackgroundSegmentActive: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBackgroundSegmentDefault: {
        light: '{colorBackgroundButtonNormalDefault}',
        dark: '{colorBackgroundButtonNormalDefault}'
      },
      colorBackgroundSegmentDisabled: {
        light: '{colorBackgroundButtonNormalDisabled}',
        dark: '{colorBackgroundButtonNormalDisabled}'
      },
      colorBackgroundSegmentHover: {
        light: '{colorBackgroundButtonNormalDefault}',
        dark: '{colorBackgroundButtonNormalDefault}'
      },
      colorBackgroundSliderHandleDefault: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBackgroundSliderHandleActive: {
        light: '{colorBlue700}',
        dark: '{colorBlue400}'
      },
      colorBackgroundSliderTrack: {
        light: '{colorGrey500}',
        dark: '{colorGrey550}'
      },
      colorBackgroundSliderHandleRing: {
        light: '{colorWhite}',
        dark: '{colorGrey800}'
      },
      colorBackgroundSliderErrorPressed: {
        light: '{colorRed700}',
        dark: '{colorRed500}'
      },
      colorBackgroundSliderWarningPressed: {
        light: '{colorYellow800}',
        dark: '{colorYellow700}'
      },
      colorBackgroundStatusError: {
        light: '{colorRed100}',
        dark: '{colorRed900}'
      },
      colorBackgroundStatusInfo: {
        light: '{colorBlue100}',
        dark: '{colorBlue900}'
      },
      colorBackgroundStatusSuccess: {
        light: '{colorGreen100}',
        dark: '{colorGreen900}'
      },
      colorBackgroundStatusWarning: {
        light: '{colorYellow100}',
        dark: '{colorYellow900}'
      },
      colorBackgroundTableHeader: {
        light: '{colorBackgroundContainerHeader}',
        dark: '{colorBackgroundContainerHeader}'
      },
      colorBackgroundTilesDisabled: {
        light: '{colorGrey200}',
        dark: '{colorGrey700}'
      },
      colorBackgroundToggleCheckedDisabled: {
        light: '{colorBlue300}',
        dark: '{colorBlue700}'
      },
      colorBackgroundToggleDefault: {
        light: '{colorGrey600}',
        dark: '{colorGrey500}'
      },
      colorBorderButtonNormalActive: {
        light: '{colorBorderButtonNormalDefault}',
        dark: '{colorBorderButtonNormalDefault}'
      },
      colorBorderButtonNormalDefault: {
        light: '{colorGrey600}',
        dark: '{colorGrey500}'
      },
      colorBorderButtonNormalDisabled: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorBorderButtonNormalHover: {
        light: '{colorGrey900}',
        dark: '{colorGrey400}'
      },
      colorBorderButtonPrimaryDisabled: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorBorderCalendarGrid: {
        light: '{colorBorderDropdownItemDefault}',
        dark: '{colorBorderDividerDefault}'
      },
      colorBorderCalendarGridSelectedFocusRing: {
        light: '{colorBorderItemFocused}',
        dark: '{colorBorderItemFocused}'
      },
      colorBorderCodeEditorAceActiveLineLightTheme: {
        light: '{colorGrey300}',
        dark: '{colorGrey300}'
      },
      colorBorderCodeEditorAceActiveLineDarkTheme: {
        light: '{colorGrey550}',
        dark: '{colorGrey550}'
      },
      colorBorderCodeEditorDefault: {
        light: '{colorGrey300}',
        dark: '{colorGrey550}'
      },
      colorBorderCodeEditorPaneItemHover: {
        light: '{colorGrey550}',
        dark: '{colorGrey500}'
      },
      colorBorderContainerDivider: {
        light: '{colorBorderDividerDefault}',
        dark: '{colorBorderDividerDefault}'
      },
      colorBorderContainerTop: {
        light: '{colorGrey200}',
        dark: '{colorGrey700}'
      },
      colorBorderControlChecked: {
        light: '{colorBackgroundControlChecked}',
        dark: '{colorBackgroundControlChecked}'
      },
      colorBorderControlDefault: {
        light: '{colorGrey550}',
        dark: '{colorGrey500}'
      },
      colorBorderControlDisabled: {
        light: '{colorBackgroundControlDisabled}',
        dark: '{colorBackgroundControlDisabled}'
      },
      colorBorderDividerActive: {
        light: '{colorGrey550}',
        dark: '{colorGrey550}'
      },
      colorBorderDividerDefault: {
        light: '{colorGrey200}',
        dark: '{colorGrey650}'
      },
      colorBorderDividerPanelBottom: {
        light: '{colorShadowSide}',
        dark: '{colorShadowSide}'
      },
      colorBorderDividerPanelSide: {
        light: 'transparent',
        dark: 'transparent'
      },
      colorBorderDividerSecondary: {
        light: '{colorGrey200}',
        dark: '{colorGrey650}'
      },
      colorBorderDropdownContainer: {
        light: 'transparent',
        dark: 'transparent'
      },
      colorBorderDropdownGroup: {
        light: '{colorBorderDropdownItemDefault}',
        dark: '{colorBorderDropdownItemDefault}'
      },
      colorBorderDropdownItemDefault: {
        light: '{colorBorderDividerDefault}',
        dark: '{colorBorderDividerDefault}'
      },
      colorBorderDropdownItemHover: {
        light: '{colorGrey500}',
        dark: '{colorGrey500}'
      },
      colorBorderDropdownItemDimmedHover: {
        light: '{colorBorderDropdownItemHover}',
        dark: '{colorBorderDropdownItemHover}'
      },
      colorBorderDropdownItemSelected: {
        light: '{colorBorderDropdownItemDefault}',
        dark: '{colorBorderDropdownItemDefault}'
      },
      colorBorderDropdownItemTop: {
        light: '{colorBorderDropdownItemDefault}',
        dark: '{colorBorderDropdownItemDefault}'
      },
      colorBorderEditableCellHover: {
        light: '{colorBorderDropdownItemHover}',
        dark: '{colorBorderDropdownItemHover}'
      },
      colorBorderInputDefault: {
        light: '{colorGrey550}',
        dark: '{colorGrey500}'
      },
      colorBorderInputDisabled: {
        light: '{colorBackgroundInputDisabled}',
        dark: '{colorBackgroundInputDisabled}'
      },
      colorBorderInputFocused: {
        light: '{colorBorderItemFocused}',
        dark: '{colorBorderItemFocused}'
      },
      colorBorderItemFocused: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBorderDropdownItemFocused: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBorderItemPlaceholder: {
        light: '{colorTransparent}',
        dark: '{colorTransparent}'
      },
      colorBorderItemSelected: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBorderLayout: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorBorderNotificationStackBar: {
        light: '{colorGrey700}',
        dark: '{colorGrey700}'
      },
      colorBorderPanelHeader: {
        light: '{colorBorderDividerDefault}',
        dark: '{colorBorderDividerDefault}'
      },
      colorBorderPopover: {
        light: '{colorGrey300}',
        dark: '{colorGrey600}'
      },
      colorBorderSegmentActive: {
        light: '{colorBorderSegmentHover}',
        dark: '{colorBorderSegmentHover}'
      },
      colorBorderSegmentDefault: {
        light: '{colorGrey550}',
        dark: '{colorGrey500}'
      },
      colorBorderSegmentDisabled: {
        light: '{colorBorderButtonNormalDisabled}',
        dark: '{colorBorderButtonNormalDisabled}'
      },
      colorBorderSegmentHover: {
        light: '{colorGrey900}',
        dark: '{colorWhite}'
      },
      colorBorderStatusError: {
        light: '{colorRed600}',
        dark: '{colorRed600}'
      },
      colorBorderStatusInfo: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorBorderStatusSuccess: {
        light: '{colorGreen600}',
        dark: '{colorGreen600}'
      },
      colorBorderStatusWarning: {
        light: '{colorYellow800}',
        dark: '{colorYellow700}'
      },
      colorBorderDividerInteractiveDefault: {
        light: '{colorGrey550}',
        dark: '{colorGrey550}'
      },
      colorBorderTabsDivider: {
        light: '{colorGrey400}',
        dark: '{colorGrey650}'
      },
      colorBorderTabsShadow: {
        light: '{colorBorderDividerDefault}',
        dark: '{colorGreyTransparent}'
      },
      colorBorderTabsUnderline: {
        light: '{colorTextInteractiveHover}',
        dark: '{colorTextInteractiveHover}'
      },
      colorBorderTilesDisabled: {
        light: '{colorTransparent}',
        dark: '{colorGrey650}'
      },
      colorBorderTutorial: {
        light: '{colorGrey400}',
        dark: '{colorGrey500}'
      },
      colorForegroundControlDefault: {
        light: '{colorWhite}',
        dark: '{colorWhite}'
      },
      colorForegroundControlDisabled: {
        light: '{colorWhite}',
        dark: '{colorGrey550}'
      },
      colorShadowDefault: {
        light: '{colorGreyTransparentHeavy}',
        dark: '{colorGreyTransparentHeavy}'
      },
      colorShadowMedium: {
        light: '{colorGreyTransparent}',
        dark: '{colorGreyTransparent}'
      },
      colorShadowSide: {
        light: '{colorGreyTransparentLight}',
        dark: '{colorGreyTransparentLight}'
      },
      colorStrokeChartLine: {
        light: '{colorGrey500}',
        dark: '{colorGrey500}'
      },
      colorStrokeCodeEditorResizeHandler: {
        light: '{colorGrey550}',
        dark: '{colorGrey550}'
      },
      colorStrokeCodeEditorGutterActiveLineDefault: {
        light: '{colorGrey300}',
        dark: '{colorGrey650}'
      },
      colorStrokeCodeEditorGutterActiveLineHover: {
        light: '{colorGrey100}',
        dark: '{colorGrey900}'
      },
      colorTextAccent: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorTextBodyDefault: {
        light: '{colorGrey900}',
        dark: '{colorGrey300}'
      },
      colorTextBodySecondary: {
        light: '{colorGrey600}',
        dark: '{colorGrey300}'
      },
      colorTextBreadcrumbCurrent: {
        light: '{colorGrey550}',
        dark: '{colorGrey300}'
      },
      colorTextBreadcrumbIcon: {
        light: '{colorGrey550}',
        dark: '{colorTextInteractiveDisabled}'
      },
      colorTextButtonInlineIconDefault: {
        light: '{colorTextInteractiveDefault}',
        dark: '{colorTextInteractiveDefault}'
      },
      colorTextButtonInlineIconDisabled: {
        light: '{colorTextInteractiveDisabled}',
        dark: '{colorTextInteractiveDisabled}'
      },
      colorTextButtonInlineIconHover: {
        light: '{colorTextInteractiveHover}',
        dark: '{colorTextInteractiveHover}'
      },
      colorTextButtonNormalActive: {
        light: '{colorGrey900}',
        dark: '{colorGrey100}'
      },
      colorTextButtonNormalDefault: {
        light: '{colorGrey600}',
        dark: '{colorGrey300}'
      },
      colorTextButtonNormalHover: {
        light: '{colorGrey900}',
        dark: '{colorGrey100}'
      },
      colorTextLinkButtonNormalDefault: {
        light: '{colorTextButtonNormalDefault}',
        dark: '{colorTextButtonNormalDefault}'
      },
      colorTextLinkButtonNormalHover: {
        light: '{colorTextButtonNormalHover}',
        dark: '{colorTextButtonNormalHover}'
      },
      colorTextLinkButtonNormalActive: {
        light: '{colorTextButtonNormalActive}',
        dark: '{colorTextButtonNormalActive}'
      },
      colorTextButtonPrimaryActive: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextButtonPrimaryDefault: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextButtonPrimaryHover: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextCalendarDateHover: {
        light: '{colorTextDropdownItemHighlighted}',
        dark: '{colorTextDropdownItemHighlighted}'
      },
      colorTextCalendarDateSelected: {
        light: '{colorTextDropdownItemHighlighted}',
        dark: '{colorTextDropdownItemHighlighted}'
      },
      colorTextCalendarMonth: {
        light: '{colorTextBodySecondary}',
        dark: '{colorTextBodySecondary}'
      },
      colorTextCodeEditorGutterActiveLine: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextCodeEditorGutterDefault: {
        light: '{colorGrey900}',
        dark: '{colorGrey300}'
      },
      colorTextCodeEditorStatusBarDisabled: {
        light: '{colorGrey500}',
        dark: '{colorGrey550}'
      },
      colorTextCodeEditorTabButtonError: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextColumnHeader: {
        light: '{colorGrey600}',
        dark: '{colorGrey450}'
      },
      colorTextColumnSortingIcon: {
        light: '{colorGrey550}',
        dark: '{colorGrey450}'
      },
      colorTextControlDisabled: {
        light: '{colorTextInteractiveDisabled}',
        dark: '{colorTextInteractiveDisabled}'
      },
      colorTextCounter: {
        light: '{colorGrey550}',
        dark: '{colorGrey450}'
      },
      colorTextDisabled: {
        light: '{colorGrey400}',
        dark: '{colorGrey550}'
      },
      colorTextDisabledInlineEdit: {
        light: '{colorGrey600}',
        dark: '{colorGrey450}'
      },
      colorTextDropdownFooter: {
        light: '{colorTextFormSecondary}',
        dark: '{colorTextFormSecondary}'
      },
      colorTextDropdownGroupLabel: {
        light: '{colorTextGroupLabel}',
        dark: '{colorTextGroupLabel}'
      },
      colorTextDropdownItemDefault: {
        light: '{colorGrey900}',
        dark: '{colorGrey300}'
      },
      colorTextDropdownItemDimmed: {
        light: '{colorTextInteractiveDisabled}',
        dark: '{colorTextInteractiveDisabled}'
      },
      colorTextDropdownItemDisabled: {
        light: '{colorTextInteractiveDisabled}',
        dark: '{colorTextInteractiveDisabled}'
      },
      colorTextDropdownItemFilterMatch: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorTextDropdownItemHighlighted: {
        light: '{colorGrey900}',
        dark: '{colorGrey200}'
      },
      colorTextDropdownItemSecondary: {
        light: '{colorTextFormSecondary}',
        dark: '{colorTextFormSecondary}'
      },
      colorTextDropdownItemSecondaryHover: {
        light: '{colorGrey550}',
        dark: '{colorGrey300}'
      },
      colorTextEmpty: {
        light: '{colorGrey550}',
        dark: '{colorGrey300}'
      },
      colorTextExpandableSectionDefault: {
        light: '{colorTextInteractiveDefault}',
        dark: '{colorTextInteractiveDefault}'
      },
      colorTextExpandableSectionHover: {
        light: '{colorTextInteractiveHover}',
        dark: '{colorTextInteractiveHover}'
      },
      colorTextExpandableSectionNavigationIconDefault: {
        light: '{colorTextIconCaret}',
        dark: '{colorTextIconCaret}'
      },
      colorTextFormDefault: {
        light: '{colorGrey900}',
        dark: '{colorGrey300}'
      },
      colorTextFormLabel: {
        light: '{colorTextFormDefault}',
        dark: '{colorTextFormDefault}'
      },
      colorTextFormSecondary: {
        light: '{colorGrey550}',
        dark: '{colorGrey450}'
      },
      colorTextGroupLabel: {
        light: '{colorTextLabel}',
        dark: '{colorTextLabel}'
      },
      colorTextLabelGenAi: {
        light: '{colorPurple600}',
        dark: '{colorPurple400}'
      },
      colorTextHeadingDefault: {
        light: '{colorGrey900}',
        dark: '{colorGrey200}'
      },
      colorTextHeadingSecondary: {
        light: '{colorGrey600}',
        dark: '{colorGrey300}'
      },
      colorTextHomeHeaderDefault: {
        light: '{colorWhite}',
        dark: '{colorGrey200}'
      },
      colorTextHomeHeaderSecondary: {
        light: '{colorGrey300}',
        dark: '{colorGrey300}'
      },
      colorTextIconCaret: {
        light: '{colorGrey500}',
        dark: '{colorGrey450}'
      },
      colorTextIconSubtle: {
        light: '{colorGrey550}',
        dark: '{colorGrey400}'
      },
      colorTextInputDisabled: {
        light: '{colorGrey500}',
        dark: '{colorGrey550}'
      },
      colorTextInputPlaceholder: {
        light: '{colorGrey550}',
        dark: '{colorGrey500}'
      },
      colorTextInputPlaceholderDisabled: {
        light: '{colorTextInputPlaceholder}',
        dark: '{colorTextInputPlaceholder}'
      },
      colorTextInteractiveActive: {
        light: '{colorGrey900}',
        dark: '{colorGrey100}'
      },
      colorTextInteractiveDefault: {
        light: '{colorGrey600}',
        dark: '{colorGrey300}'
      },
      colorTextInteractiveDisabled: {
        light: '{colorGrey400}',
        dark: '{colorGrey550}'
      },
      colorTextInteractiveHover: {
        light: '{colorGrey900}',
        dark: '{colorGrey100}'
      },
      colorTextInteractiveInvertedDefault: {
        light: '{colorGrey300}',
        dark: '{colorGrey300}'
      },
      colorTextInteractiveInvertedHover: {
        light: '{colorGrey100}',
        dark: '{colorGrey100}'
      },
      colorTextInverted: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextLabel: {
        light: '{colorGrey600}',
        dark: '{colorGrey450}'
      },
      colorTextLayoutToggle: {
        light: '{colorGrey600}',
        dark: '{colorGrey300}'
      },
      colorTextLayoutToggleActive: {
        light: '{colorWhite}',
        dark: '{colorGrey800}'
      },
      colorTextLayoutToggleHover: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorTextLayoutToggleSelected: {
        light: '{colorWhite}',
        dark: '{colorGrey900}'
      },
      colorTextLinkDefault: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorTextLinkHover: {
        light: '{colorBlue700}',
        dark: '{colorBlue300}'
      },
      colorTextLinkInvertedHover: {
        light: '{colorTextNotificationDefault}',
        dark: '{colorTextNotificationDefault}'
      },
      colorTextLinkButtonUnderline: {
        light: 'currentColor',
        dark: 'currentColor'
      },
      colorTextLinkButtonUnderlineHover: {
        light: 'currentColor',
        dark: 'currentColor'
      },
      colorTextNotificationDefault: {
        light: '{colorGrey100}',
        dark: '{colorGrey100}'
      },
      colorTextNotificationStackBar: {
        light: '{colorWhite}',
        dark: '{colorWhite}'
      },
      colorTextNotificationYellow: {
        light: '{colorGrey900}',
        dark: '{colorGrey900}'
      },
      colorTextPaginationPageNumberActiveDisabled: {
        light: '{colorTextBodySecondary}',
        dark: '{colorTextBodySecondary}'
      },
      colorTextPaginationPageNumberDefault: {
        light: '{colorTextInteractiveDefault}',
        dark: '{colorTextInteractiveDefault}'
      },
      colorTextSegmentActive: {
        light: '{colorWhite}',
        dark: '{colorGrey800}'
      },
      colorTextSegmentDefault: {
        light: '{colorTextButtonNormalDefault}',
        dark: '{colorTextButtonNormalDefault}'
      },
      colorTextSegmentHover: {
        light: '{colorBlue600}',
        dark: '{colorBlue500}'
      },
      colorTextSmall: {
        light: '{colorGrey550}',
        dark: '{colorGrey450}'
      },
      colorTextStatusError: {
        light: '{colorRed600}',
        dark: '{colorRed500}'
      },
      colorTextStatusInactive: {
        light: '{colorGrey550}',
        dark: '{colorGrey450}'
      },
      colorTextStatusInfo: {
        light: '{colorBlue600}',
        dark: '{colorBlue400}'
      },
      colorTextStatusSuccess: {
        light: '{colorGreen600}',
        dark: '{colorGreen500}'
      },
      colorTextStatusWarning: {
        light: '{colorYellow800}',
        dark: '{colorYellow700}'
      },
      colorTextTopNavigationTitle: {
        light: '{colorGrey900}',
        dark: '{colorGrey100}'
      },
      colorBoardPlaceholderActive: {
        light: '{colorGrey300}',
        dark: '{colorGrey550}'
      },
      colorBoardPlaceholderHover: {
        light: '{colorBlue300}',
        dark: '{colorBlue600}'
      },
      colorDragPlaceholderActive: {
        light: '{colorGrey300}',
        dark: '{colorGrey550}'
      },
      colorDragPlaceholderHover: {
        light: '{colorBlue300}',
        dark: '{colorBlue600}'
      },
      colorDropzoneBackgroundActive: {
        light: '{colorGrey300}',
        dark: '{colorGrey550}'
      },
      colorDropzoneBackgroundHover: {
        light: '{colorBlue300}',
        dark: '{colorBlue600}'
      },
      colorDropzoneTextActive: {
        light: '{colorGrey600}',
        dark: '{colorGrey900}'
      },
      colorDropzoneTextHover: {
        light: '{colorBlue900}',
        dark: '{colorWhite}'
      },
      fontBoxValueLargeWeight: '300',
      fontButtonLetterSpacing: '0.25px',
      fontButtonWeight: '700',
      fontChartDetailSize: '{fontSizeBodyM}',
      fontDisplayLabelWeight: '400',
      fontExpandableHeadingSize: '{fontSizeBodyM}',
      fontFamilyBase:
        "'Noto Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
      fontFamilyMonospace:
        "Monaco, Menlo, Consolas, 'Courier Prime', Courier, 'Courier New', monospace",
      fontHeaderH2DescriptionLineHeight: '{lineHeightBodyS}',
      fontHeaderH2DescriptionSize: '{fontSizeBodyS}',
      fontLinkButtonLetterSpacing: 'normal',
      fontLinkButtonWeight: '400',
      fontPanelHeaderLineHeight: '{lineHeightHeadingL}',
      fontPanelHeaderSize: '{fontSizeHeadingL}',
      fontSizeBodyM: '14px',
      fontSizeBodyS: '12px',
      fontSizeDisplayL: '44px',
      fontSizeHeadingXl: '28px',
      fontSizeHeadingL: '18px',
      fontSizeHeadingM: '18px',
      fontSizeHeadingS: '16px',
      fontSizeHeadingXs: '16px',
      fontSmoothingMozOsx: 'auto',
      fontSmoothingWebkit: 'auto',
      fontTabsDisabledWeight: '400',
      fontTabsLineHeight: '{lineHeightBodyM}',
      fontTabsSize: '{fontSizeBodyM}',
      fontWayfindingLinkActiveWeight: '700',
      fontWeightHeadingXl: '400',
      fontWeightHeadingL: '{fontWeightHeavy}',
      fontWeightHeadingM: '400',
      fontWeightHeadingS: '{fontWeightHeavy}',
      fontWeightHeadingXs: '400',
      fontWeightHeavy: '700',
      letterSpacingBodyS: 'normal',
      letterSpacingDisplayL: 'normal',
      letterSpacingHeadingXl: 'normal',
      letterSpacingHeadingL: 'normal',
      letterSpacingHeadingM: 'normal',
      letterSpacingHeadingS: 'normal',
      lineHeightBodyM: '22px',
      lineHeightBodyS: '16px',
      lineHeightDisplayL: '56px',
      lineHeightHeadingXl: '36px',
      lineHeightHeadingL: '22px',
      lineHeightHeadingM: '22px',
      lineHeightHeadingS: '20px',
      lineHeightHeadingXs: '20px',
      borderActiveWidth: '2px',
      borderCodeEditorStatusDividerWidth: '0px',
      borderContainerStickyWidth: '1px',
      borderContainerTopWidth: '1px',
      borderControlFocusRingShadowSpread: '1px',
      borderControlInvalidFocusRingShadowSpread:
        '{borderControlFocusRingShadowSpread}',
      borderDividerListWidth: '1px',
      borderDividerSectionWidth: '1px',
      borderDropdownVirtualOffsetWidth: '0px',
      borderFieldWidth: '1px',
      borderInvalidWidth: '4px',
      borderItemWidth: '1px',
      borderLineChartDashArray: '3 5',
      borderLineChartLineJoin: 'miter',
      borderLineChartWidth: '2px',
      borderPanelHeaderWidth: '0px',
      borderPanelTopWidth: '0px',
      borderRadiusAlert: '{borderRadiusInput}',
      borderRadiusBadge: '16px',
      borderRadiusButton: '2px',
      borderRadiusCalendarDayFocusRing: '2px',
      borderRadiusCodeEditor: '{borderRadiusItem}',
      borderRadiusContainer: '0px',
      borderRadiusControlCircularFocusRing: '50%',
      borderRadiusControlDefaultFocusRing: '{borderRadiusInput}',
      borderRadiusDropdown: '{borderRadiusItem}',
      borderRadiusDropzone: '0px',
      borderRadiusFlashbar: '0px',
      borderRadiusItem: '0px',
      borderRadiusInput: '2px',
      borderRadiusPopover: '{borderRadiusInput}',
      borderRadiusTabsFocusRing: '0px',
      borderRadiusTiles: '{borderRadiusInput}',
      borderRadiusToken: '{borderRadiusInput}',
      borderRadiusTutorialPanelItem: '{borderRadiusInput}',
      borderTableStickyWidth: '0px',
      borderLinkFocusRingOutline: '5px auto Highlight',
      borderLinkFocusRingShadowSpread: '0px',
      motionDurationExtraFast: {
        default: '45ms',
        disabled: '0ms'
      },
      motionDurationExtraSlow: {
        default: '270ms',
        disabled: '0ms'
      },
      motionDurationFast: {
        default: '90ms',
        disabled: '0ms'
      },
      motionDurationModerate: {
        default: '135ms',
        disabled: '0ms'
      },
      motionDurationRefreshOnlyAmbient: {
        default: '2000ms',
        disabled: '0ms'
      },
      motionDurationRefreshOnlyFast: {
        default: '115ms',
        disabled: '0ms'
      },
      motionDurationRefreshOnlyMedium: {
        default: '165ms',
        disabled: '0ms'
      },
      motionDurationRefreshOnlySlow: {
        default: '250ms',
        disabled: '0ms'
      },
      motionDurationRotate180: {
        default: '{motionDurationModerate}',
        disabled: '{motionDurationModerate}'
      },
      motionDurationRotate90: {
        default: '{motionDurationModerate}',
        disabled: '{motionDurationModerate}'
      },
      motionDurationShowPaced: {
        default: '{motionDurationSlow}',
        disabled: '{motionDurationSlow}'
      },
      motionDurationShowQuick: {
        default: '{motionDurationModerate}',
        disabled: '{motionDurationModerate}'
      },
      motionDurationSlow: {
        default: '180ms',
        disabled: '0ms'
      },
      motionDurationTransitionQuick: {
        default: '{motionDurationFast}',
        disabled: '{motionDurationFast}'
      },
      motionDurationTransitionShowPaced: {
        default: '{motionDurationSlow}',
        disabled: '{motionDurationSlow}'
      },
      motionDurationTransitionShowQuick: {
        default: '{motionDurationFast}',
        disabled: '{motionDurationFast}'
      },
      motionEasingEaseOutQuart: {
        default: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        disabled: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
      },
      motionEasingRefreshOnlyA: {
        default: 'cubic-bezier(0, 0, 0, 1)',
        disabled: 'cubic-bezier(0, 0, 0, 1)'
      },
      motionEasingRefreshOnlyB: {
        default: 'cubic-bezier(1, 0, 0.83, 1)',
        disabled: 'cubic-bezier(1, 0, 0.83, 1)'
      },
      motionEasingRefreshOnlyC: {
        default: 'cubic-bezier(0.84, 0, 0.16, 1)',
        disabled: 'cubic-bezier(0.84, 0, 0.16, 1)'
      },
      motionEasingRefreshOnlyD: {
        default: 'cubic-bezier(0.33, 0, 0.67, 1)',
        disabled: 'cubic-bezier(0.33, 0, 0.67, 1)'
      },
      motionEasingRotate180: {
        default: '{motionEasingEaseOutQuart}',
        disabled: '{motionEasingEaseOutQuart}'
      },
      motionEasingRotate90: {
        default: '{motionEasingEaseOutQuart}',
        disabled: '{motionEasingEaseOutQuart}'
      },
      motionEasingShowPaced: {
        default: 'ease-out',
        disabled: 'ease-out'
      },
      motionEasingShowQuick: {
        default: 'ease-out',
        disabled: 'ease-out'
      },
      motionEasingTransitionQuick: {
        default: 'linear',
        disabled: 'linear'
      },
      motionEasingTransitionShowPaced: {
        default: 'ease-out',
        disabled: 'ease-out'
      },
      motionEasingTransitionShowQuick: {
        default: 'linear',
        disabled: 'linear'
      },
      motionEasingResponsive: 'ease-out',
      motionEasingSticky: 'ease-out',
      motionEasingExpressive: 'ease-out',
      motionDurationResponsive: '{motionDurationModerate}',
      motionDurationExpressive: '{motionDurationSlow}',
      motionDurationComplex: '{motionDurationExtraSlow}',
      motionKeyframesFadeIn: {
        default: 'awsui-fade-in-35003c',
        disabled: 'awsui-fade-in-35003c'
      },
      motionKeyframesFadeOut: {
        default: 'awsui-fade-out-35003c',
        disabled: 'awsui-fade-out-35003c'
      },
      motionKeyframesStatusIconError: 'awsui-none-35003c',
      motionKeyframesScalePopup: 'awsui-none-35003c',
      sizeCalendarGridWidth: {
        comfortable: '234px',
        compact: '234px'
      },
      sizeControl: {
        comfortable: '14px',
        compact: '14px'
      },
      sizeIconBig: {
        comfortable: '32px',
        compact: '32px'
      },
      sizeIconLarge: {
        comfortable: '48px',
        compact: '48px'
      },
      sizeIconMedium: {
        comfortable: '16px',
        compact: '16px'
      },
      sizeIconNormal: {
        comfortable: '16px',
        compact: '16px'
      },
      sizeTableSelectionHorizontal: {
        comfortable: '54px',
        compact: '54px'
      },
      sizeVerticalInput: {
        comfortable: '32px',
        compact: '28px'
      },
      sizeVerticalPanelIconOffset: {
        comfortable: '15px',
        compact: '13px'
      },
      spaceAlertActionLeft: {
        comfortable: '{spaceL}',
        compact: '{spaceL}'
      },
      spaceAlertHorizontal: {
        comfortable: '{spaceL}',
        compact: '{spaceL}'
      },
      spaceAlertMessageRight: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceAlertVertical: {
        comfortable: '{spaceScaledS}',
        compact: '{spaceScaledS}'
      },
      spaceButtonFocusOutlineGutter: {
        comfortable: '3px',
        compact: '3px'
      },
      spaceButtonHorizontal: {
        comfortable: '{spaceL}',
        compact: '{spaceL}'
      },
      spaceButtonIconFocusOutlineGutterVertical: {
        comfortable: '{spaceButtonFocusOutlineGutter}',
        compact: '{spaceButtonFocusOutlineGutter}'
      },
      spaceButtonIconOnlyHorizontal: {
        comfortable: '{spaceM}',
        compact: '{spaceM}'
      },
      spaceButtonInlineIconFocusOutlineGutter: {
        comfortable: '{spaceButtonFocusOutlineGutter}',
        compact: '{spaceButtonFocusOutlineGutter}'
      },
      spaceButtonModalDismissVertical: {
        comfortable: '{spaceScaledXxs}',
        compact: '{spaceScaledXxs}'
      },
      spaceCalendarGridFocusOutlineGutter: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceCalendarGridSelectedFocusOutlineGutter: {
        comfortable: '2px',
        compact: '2px'
      },
      spaceCalendarGridGutter: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceCardHorizontal: {
        comfortable: '{spaceContainerHorizontal}',
        compact: '{spaceContainerHorizontal}'
      },
      spaceCardVertical: {
        comfortable: '{spaceScaledL}',
        compact: '{spaceScaledL}'
      },
      spaceCodeEditorStatusFocusOutlineGutter: {
        comfortable: '3px',
        compact: '3px'
      },
      spaceContainerContentTop: {
        comfortable: '{spaceScaledM}',
        compact: '{spaceScaledM}'
      },
      spaceContainerHeaderTop: {
        comfortable: '{spaceScaledS}',
        compact: '{spaceScaledS}'
      },
      spaceContainerHeaderBottom: {
        comfortable: '{spaceScaledS}',
        compact: '{spaceScaledS}'
      },
      spaceContainerHorizontal: {
        comfortable: '{spaceL}',
        compact: '{spaceL}'
      },
      spaceContentHeaderPaddingBottom: {
        comfortable: '{spaceScaledM}',
        compact: '{spaceScaledM}'
      },
      spaceDarkHeaderOverlapDistance: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceExpandableSectionIconOffsetTop: {
        comfortable: '{spaceScaledXs}',
        compact: '{spaceScaledXs}'
      },
      spaceFieldHorizontal: {
        comfortable: '{spaceXs}',
        compact: '{spaceXs}'
      },
      spaceFieldIconOffset: {
        comfortable: '32px',
        compact: '32px'
      },
      spaceFilteringTokenDismissButtonFocusOutlineGutter: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceFilteringTokenOperationSelectFocusOutlineGutter: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceFlashbarActionLeft: {
        comfortable: '{spaceM}',
        compact: '{spaceM}'
      },
      spaceFlashbarDismissRight: {
        comfortable: '{spaceXxs}',
        compact: '{spaceXxs}'
      },
      spaceFlashbarHorizontal: {
        comfortable: '{spaceS}',
        compact: '{spaceS}'
      },
      spaceGridGutter: {
        comfortable: '{spaceL}',
        compact: '{spaceM}'
      },
      spaceKeyValueGap: {
        comfortable: '{spaceScaledXxxs}',
        compact: '{spaceScaledXxxs}'
      },
      spaceLayoutContentBottom: {
        comfortable: '{spaceScaledL}',
        compact: '{spaceScaledL}'
      },
      spaceLayoutContentHorizontal: {
        comfortable: '{spaceScaled2xXxxl}',
        compact: '{spaceScaled2xXxxl}'
      },
      spaceLayoutToggleDiameter: {
        comfortable: '36px',
        compact: '36px'
      },
      spaceLayoutTogglePadding: {
        comfortable: '{spaceStaticS}',
        compact: '{spaceStaticS}'
      },
      spaceModalContentBottom: {
        comfortable: '{spaceScaledL}',
        compact: '{spaceScaledL}'
      },
      spaceModalHorizontal: {
        comfortable: '{spaceContainerHorizontal}',
        compact: '{spaceContainerHorizontal}'
      },
      spaceOptionIconBigTop: {
        comfortable: '{spaceXxxs}',
        compact: '{spaceXxxs}'
      },
      spacePanelContentBottom: {
        comfortable: '{spaceScaledXxxl}',
        compact: '{spaceScaledXxxl}'
      },
      spacePanelContentTop: {
        comfortable: '{spaceScaledL}',
        compact: '{spaceScaledL}'
      },
      spacePanelDividerMarginHorizontal: {
        comfortable: '{spaceS}',
        compact: '{spaceS}'
      },
      spacePanelHeaderVertical: {
        comfortable: '{spaceScaledL}',
        compact: '{spaceScaledL}'
      },
      spacePanelNavLeft: {
        comfortable: '{spaceXxl}',
        compact: '{spaceXxl}'
      },
      spacePanelSideLeft: {
        comfortable: '{spaceScaledXxl}',
        compact: '{spaceScaledXxl}'
      },
      spacePanelSideRight: {
        comfortable: '{spaceScaledXxl}',
        compact: '{spaceScaledXxl}'
      },
      spacePanelSplitTop: {
        comfortable: '0px',
        compact: '0px'
      },
      spacePanelSplitBottom: {
        comfortable: '{spaceScaledL}',
        compact: '{spaceScaledL}'
      },
      spaceSegmentedControlFocusOutlineGutter: {
        comfortable: '3px',
        compact: '3px'
      },
      spaceTabsContentTop: {
        comfortable: '{spaceScaledM}',
        compact: '{spaceScaledM}'
      },
      spaceTabsFocusOutlineGutter: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceTableContentBottom: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceTableEmbeddedHeaderTop: {
        comfortable: '{spaceContainerHeaderTop}',
        compact: '{spaceContainerHeaderTop}'
      },
      spaceTableFooterHorizontal: {
        comfortable: '{spaceTableHeaderHorizontal}',
        compact: '{spaceTableHeaderHorizontal}'
      },
      spaceTableHeaderFocusOutlineGutter: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceTableHeaderHorizontal: {
        comfortable: '{spaceContainerHorizontal}',
        compact: '{spaceContainerHorizontal}'
      },
      spaceTableHeaderToolsBottom: {
        comfortable: '{spaceScaledXxs}',
        compact: '{spaceScaledXxs}'
      },
      spaceTableHeaderToolsFullPageBottom: {
        comfortable: '4px',
        compact: '4px'
      },
      spaceTableHorizontal: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceScaled2xNone: {
        comfortable: '{spaceNone}',
        compact: '{spaceNone}'
      },
      spaceScaled2xXxxs: {
        comfortable: '{spaceXxxs}',
        compact: '{spaceNone}'
      },
      spaceScaled2xXxs: {
        comfortable: '{spaceXxs}',
        compact: '{spaceNone}'
      },
      spaceScaled2xXs: {
        comfortable: '{spaceXs}',
        compact: '{spaceNone}'
      },
      spaceScaled2xS: {
        comfortable: '{spaceS}',
        compact: '{spaceXxs}'
      },
      spaceScaled2xM: {
        comfortable: '{spaceM}',
        compact: '{spaceXs}'
      },
      spaceScaled2xL: {
        comfortable: '{spaceL}',
        compact: '{spaceS}'
      },
      spaceScaled2xXl: {
        comfortable: '{spaceXl}',
        compact: '{spaceM}'
      },
      spaceScaled2xXxl: {
        comfortable: '{spaceXxl}',
        compact: '{spaceL}'
      },
      spaceScaled2xXxxl: {
        comfortable: '{spaceXxxl}',
        compact: '{spaceXl}'
      },
      spaceScaledNone: {
        comfortable: '{spaceNone}',
        compact: '{spaceNone}'
      },
      spaceScaledXxxs: {
        comfortable: '{spaceXxxs}',
        compact: '{spaceNone}'
      },
      spaceScaledXxs: {
        comfortable: '{spaceXxs}',
        compact: '{spaceXxxs}'
      },
      spaceScaledXs: {
        comfortable: '{spaceXs}',
        compact: '{spaceXxs}'
      },
      spaceScaledS: {
        comfortable: '{spaceS}',
        compact: '{spaceXs}'
      },
      spaceScaledM: {
        comfortable: '{spaceM}',
        compact: '{spaceS}'
      },
      spaceScaledL: {
        comfortable: '{spaceL}',
        compact: '{spaceM}'
      },
      spaceScaledXl: {
        comfortable: '{spaceXl}',
        compact: '{spaceL}'
      },
      spaceScaledXxl: {
        comfortable: '{spaceXxl}',
        compact: '{spaceXl}'
      },
      spaceScaledXxxl: {
        comfortable: '{spaceXxxl}',
        compact: '{spaceXxl}'
      },
      spaceStaticXxxs: {
        comfortable: '{spaceXxxs}',
        compact: '{spaceXxxs}'
      },
      spaceStaticXxs: {
        comfortable: '{spaceXxs}',
        compact: '{spaceXxs}'
      },
      spaceStaticXs: {
        comfortable: '{spaceXs}',
        compact: '{spaceXs}'
      },
      spaceStaticS: {
        comfortable: '{spaceS}',
        compact: '{spaceS}'
      },
      spaceStaticM: {
        comfortable: '{spaceM}',
        compact: '{spaceM}'
      },
      spaceStaticL: {
        comfortable: '{spaceL}',
        compact: '{spaceL}'
      },
      spaceStaticXl: {
        comfortable: '{spaceXl}',
        compact: '{spaceXl}'
      },
      spaceStaticXxl: {
        comfortable: '{spaceXxl}',
        compact: '{spaceXxl}'
      },
      spaceStaticXxxl: {
        comfortable: '{spaceXxxl}',
        compact: '{spaceXxxl}'
      },
      spaceNone: {
        comfortable: '0px',
        compact: '0px'
      },
      spaceXxxs: {
        comfortable: '2px',
        compact: '2px'
      },
      spaceXxs: {
        comfortable: '4px',
        compact: '4px'
      },
      spaceXs: {
        comfortable: '8px',
        compact: '8px'
      },
      spaceS: {
        comfortable: '12px',
        compact: '12px'
      },
      spaceM: {
        comfortable: '16px',
        compact: '16px'
      },
      spaceL: {
        comfortable: '20px',
        compact: '20px'
      },
      spaceXl: {
        comfortable: '24px',
        compact: '24px'
      },
      spaceXxl: {
        comfortable: '32px',
        compact: '32px'
      },
      spaceXxxl: {
        comfortable: '40px',
        compact: '40px'
      },
      shadowContainer: {
        light:
          '0 1px 1px 0 rgba(0, 28, 36, 0.3), 1px 1px 1px 0 rgba(0, 28, 36, 0.15), -1px 1px 1px 0 rgba(0, 28, 36, 0.15)',
        dark: '0 1px 1px 0 rgba(0, 0, 0, 0.3), 1px 1px 1px 0 rgba(0, 0, 0, 0.3), -1px 1px 1px 0 rgba(0, 0, 0, 0.3)'
      },
      shadowContainerStacked: {
        light: '{shadowContainer}',
        dark: '{shadowContainer}'
      },
      shadowContainerActive: {
        light: '0px 4px 8px rgba(0, 28, 36, 0.45)',
        dark: '0px 4px 8px rgba(0, 28, 36, 0.45)'
      },
      shadowDropdown: {
        light: '{shadowContainer}',
        dark: '{shadowContainer}'
      },
      shadowDropup: {
        light:
          '0 -1px 1px 0 rgba(0, 28, 36, 0.3), 1px -1px 1px 0 rgba(0, 28, 36, 0.15), -1px -1px 1px 0 rgba(0, 28, 36, 0.15)',
        dark: '0 -1px 1px 0 rgba(0, 0, 0, 0.3), 1px -1px 1px 0 rgba(0, 0, 0, 0.3), -1px -1px 1px 0 rgba(0, 0, 0, 0.3)'
      },
      shadowFlashCollapsed: {
        light: '0px 2px 2px rgba(0, 0, 0, 0.15)',
        dark: '0px 2px 2px rgba(0, 0, 0, 0.15)'
      },
      shadowFlashSticky: {
        light: '{shadowPanel}',
        dark: '{shadowPanel}'
      },
      shadowModal: {
        light: '{shadowContainer}',
        dark: '{shadowContainer}'
      },
      shadowPanel: {
        light: '{shadowContainer}',
        dark: '{shadowContainer}'
      },
      shadowPanelToggle: {
        light: '{shadowPanel}',
        dark: '{shadowPanel}'
      },
      shadowPopover: {
        light: '{shadowSticky}',
        dark: '{shadowSticky}'
      },
      shadowSplitBottom: {
        light:
          '0 -2px 1px -1px rgba(0, 28, 36, 0.15), 0 -1px 1px -1px rgba(0, 28, 36, 0.3)',
        dark: '0 -2px 1px -1px rgba(0, 0, 0, 0.3), 0 -1px 1px -1px rgba(0, 0, 0, 0.3)'
      },
      shadowSplitSide: {
        light: '{shadowContainer}',
        dark: '{shadowContainer}'
      },
      shadowSticky: {
        light: '0px 1px 4px -2px rgba(0, 28, 36, 0.5)',
        dark: '0px 1px 4px -2px rgba(0, 0, 0, 0.5)'
      },
      shadowStickyEmbedded: {
        light: '{shadowSticky}',
        dark: '{shadowSticky}'
      },
      shadowStickyColumnFirst: {
        light: '4px 0 8px 0 rgba(0, 28, 36, 0.1)',
        dark: '4px 0 8px 0 rgba(0, 0, 0, 0.5)'
      },
      shadowStickyColumnLast: {
        light: '-4px 0 8px 0 rgba(0, 28, 36, 0.1)',
        dark: '-4px 0 8px 0 rgba(0, 0, 0, 0.5)'
      }
    },
    contexts: {
      'compact-table': {
        id: 'compact-table',
        selector: '.awsui-context-compact-table',
        tokens: {
          spaceAlertActionLeft: {
            comfortable: '{spaceL}',
            compact: '{spaceL}'
          },
          spaceAlertHorizontal: {
            comfortable: '{spaceL}',
            compact: '{spaceL}'
          },
          spaceAlertMessageRight: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceAlertVertical: {
            comfortable: '{spaceScaledS}',
            compact: '{spaceScaledS}'
          },
          spaceButtonFocusOutlineGutter: {
            comfortable: '3px',
            compact: '3px'
          },
          spaceButtonHorizontal: {
            comfortable: '{spaceL}',
            compact: '{spaceL}'
          },
          spaceButtonIconFocusOutlineGutterVertical: {
            comfortable: '{spaceButtonFocusOutlineGutter}',
            compact: '{spaceButtonFocusOutlineGutter}'
          },
          spaceButtonIconOnlyHorizontal: {
            comfortable: '{spaceM}',
            compact: '{spaceM}'
          },
          spaceButtonInlineIconFocusOutlineGutter: {
            comfortable: '{spaceButtonFocusOutlineGutter}',
            compact: '{spaceButtonFocusOutlineGutter}'
          },
          spaceButtonModalDismissVertical: {
            comfortable: '{spaceScaledXxs}',
            compact: '{spaceScaledXxs}'
          },
          spaceCalendarGridFocusOutlineGutter: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceCalendarGridSelectedFocusOutlineGutter: {
            comfortable: '2px',
            compact: '2px'
          },
          spaceCalendarGridGutter: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceCardHorizontal: {
            comfortable: '{spaceContainerHorizontal}',
            compact: '{spaceContainerHorizontal}'
          },
          spaceCardVertical: {
            comfortable: '{spaceScaledL}',
            compact: '{spaceScaledL}'
          },
          spaceCodeEditorStatusFocusOutlineGutter: {
            comfortable: '3px',
            compact: '3px'
          },
          spaceContainerContentTop: {
            comfortable: '{spaceScaledM}',
            compact: '{spaceScaledM}'
          },
          spaceContainerHeaderTop: {
            comfortable: '{spaceScaledS}',
            compact: '{spaceScaledS}'
          },
          spaceContainerHeaderBottom: {
            comfortable: '{spaceScaledS}',
            compact: '{spaceScaledS}'
          },
          spaceContainerHorizontal: {
            comfortable: '{spaceL}',
            compact: '{spaceL}'
          },
          spaceContentHeaderPaddingBottom: {
            comfortable: '{spaceScaledM}',
            compact: '{spaceScaledM}'
          },
          spaceDarkHeaderOverlapDistance: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceExpandableSectionIconOffsetTop: {
            comfortable: '{spaceScaledXs}',
            compact: '{spaceScaledXs}'
          },
          spaceFieldHorizontal: {
            comfortable: '{spaceXs}',
            compact: '{spaceXs}'
          },
          spaceFieldIconOffset: {
            comfortable: '32px',
            compact: '32px'
          },
          spaceFilteringTokenDismissButtonFocusOutlineGutter: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceFilteringTokenOperationSelectFocusOutlineGutter: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceFlashbarActionLeft: {
            comfortable: '{spaceM}',
            compact: '{spaceM}'
          },
          spaceFlashbarDismissRight: {
            comfortable: '{spaceXxs}',
            compact: '{spaceXxs}'
          },
          spaceFlashbarHorizontal: {
            comfortable: '{spaceS}',
            compact: '{spaceS}'
          },
          spaceGridGutter: {
            comfortable: '{spaceL}',
            compact: '{spaceM}'
          },
          spaceKeyValueGap: {
            comfortable: '{spaceScaledXxxs}',
            compact: '{spaceScaledXxxs}'
          },
          spaceLayoutContentBottom: {
            comfortable: '{spaceScaledL}',
            compact: '{spaceScaledL}'
          },
          spaceLayoutContentHorizontal: {
            comfortable: '{spaceScaled2xXxxl}',
            compact: '{spaceScaled2xXxxl}'
          },
          spaceLayoutToggleDiameter: {
            comfortable: '36px',
            compact: '36px'
          },
          spaceLayoutTogglePadding: {
            comfortable: '{spaceStaticS}',
            compact: '{spaceStaticS}'
          },
          spaceModalContentBottom: {
            comfortable: '{spaceScaledL}',
            compact: '{spaceScaledL}'
          },
          spaceModalHorizontal: {
            comfortable: '{spaceContainerHorizontal}',
            compact: '{spaceContainerHorizontal}'
          },
          spaceOptionIconBigTop: {
            comfortable: '{spaceXxxs}',
            compact: '{spaceXxxs}'
          },
          spacePanelContentBottom: {
            comfortable: '{spaceScaledXxxl}',
            compact: '{spaceScaledXxxl}'
          },
          spacePanelContentTop: {
            comfortable: '{spaceScaledL}',
            compact: '{spaceScaledL}'
          },
          spacePanelDividerMarginHorizontal: {
            comfortable: '{spaceS}',
            compact: '{spaceS}'
          },
          spacePanelHeaderVertical: {
            comfortable: '{spaceScaledL}',
            compact: '{spaceScaledL}'
          },
          spacePanelNavLeft: {
            comfortable: '{spaceXxl}',
            compact: '{spaceXxl}'
          },
          spacePanelSideLeft: {
            comfortable: '{spaceScaledXxl}',
            compact: '{spaceScaledXxl}'
          },
          spacePanelSideRight: {
            comfortable: '{spaceScaledXxl}',
            compact: '{spaceScaledXxl}'
          },
          spacePanelSplitTop: {
            comfortable: '0px',
            compact: '0px'
          },
          spacePanelSplitBottom: {
            comfortable: '{spaceScaledL}',
            compact: '{spaceScaledL}'
          },
          spaceSegmentedControlFocusOutlineGutter: {
            comfortable: '3px',
            compact: '3px'
          },
          spaceTabsContentTop: {
            comfortable: '{spaceScaledM}',
            compact: '{spaceScaledM}'
          },
          spaceTabsFocusOutlineGutter: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceTableContentBottom: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceTableEmbeddedHeaderTop: {
            comfortable: '{spaceContainerHeaderTop}',
            compact: '{spaceContainerHeaderTop}'
          },
          spaceTableFooterHorizontal: {
            comfortable: '{spaceTableHeaderHorizontal}',
            compact: '{spaceTableHeaderHorizontal}'
          },
          spaceTableHeaderFocusOutlineGutter: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceTableHeaderHorizontal: {
            comfortable: '{spaceContainerHorizontal}',
            compact: '{spaceContainerHorizontal}'
          },
          spaceTableHeaderToolsBottom: {
            comfortable: '{spaceScaledXxs}',
            compact: '{spaceScaledXxs}'
          },
          spaceTableHeaderToolsFullPageBottom: {
            comfortable: '4px',
            compact: '4px'
          },
          spaceTableHorizontal: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceScaled2xNone: {
            comfortable: '{spaceNone}',
            compact: '{spaceNone}'
          },
          spaceScaled2xXxxs: {
            comfortable: '{spaceXxxs}',
            compact: '{spaceNone}'
          },
          spaceScaled2xXxs: {
            comfortable: '{spaceXxs}',
            compact: '{spaceNone}'
          },
          spaceScaled2xXs: {
            comfortable: '{spaceXs}',
            compact: '{spaceNone}'
          },
          spaceScaled2xS: {
            comfortable: '{spaceS}',
            compact: '{spaceXxs}'
          },
          spaceScaled2xM: {
            comfortable: '{spaceM}',
            compact: '{spaceXs}'
          },
          spaceScaled2xL: {
            comfortable: '{spaceL}',
            compact: '{spaceS}'
          },
          spaceScaled2xXl: {
            comfortable: '{spaceXl}',
            compact: '{spaceM}'
          },
          spaceScaled2xXxl: {
            comfortable: '{spaceXxl}',
            compact: '{spaceL}'
          },
          spaceScaled2xXxxl: {
            comfortable: '{spaceXxxl}',
            compact: '{spaceXl}'
          },
          spaceScaledNone: {
            comfortable: '{spaceNone}',
            compact: '{spaceNone}'
          },
          spaceScaledXxxs: {
            comfortable: '{spaceNone}',
            compact: '{spaceNone}'
          },
          spaceScaledXxs: {
            comfortable: '{spaceXxxs}',
            compact: '{spaceXxxs}'
          },
          spaceScaledXs: {
            comfortable: '{spaceXxs}',
            compact: '{spaceXxs}'
          },
          spaceScaledS: {
            comfortable: '{spaceXs}',
            compact: '{spaceXs}'
          },
          spaceScaledM: {
            comfortable: '{spaceS}',
            compact: '{spaceS}'
          },
          spaceScaledL: {
            comfortable: '{spaceM}',
            compact: '{spaceM}'
          },
          spaceScaledXl: {
            comfortable: '{spaceL}',
            compact: '{spaceL}'
          },
          spaceScaledXxl: {
            comfortable: '{spaceXl}',
            compact: '{spaceXl}'
          },
          spaceScaledXxxl: {
            comfortable: '{spaceXxl}',
            compact: '{spaceXxl}'
          },
          spaceStaticXxxs: {
            comfortable: '{spaceXxxs}',
            compact: '{spaceXxxs}'
          },
          spaceStaticXxs: {
            comfortable: '{spaceXxs}',
            compact: '{spaceXxs}'
          },
          spaceStaticXs: {
            comfortable: '{spaceXs}',
            compact: '{spaceXs}'
          },
          spaceStaticS: {
            comfortable: '{spaceS}',
            compact: '{spaceS}'
          },
          spaceStaticM: {
            comfortable: '{spaceM}',
            compact: '{spaceM}'
          },
          spaceStaticL: {
            comfortable: '{spaceL}',
            compact: '{spaceL}'
          },
          spaceStaticXl: {
            comfortable: '{spaceXl}',
            compact: '{spaceXl}'
          },
          spaceStaticXxl: {
            comfortable: '{spaceXxl}',
            compact: '{spaceXxl}'
          },
          spaceStaticXxxl: {
            comfortable: '{spaceXxxl}',
            compact: '{spaceXxxl}'
          },
          spaceNone: {
            comfortable: '0px',
            compact: '0px'
          },
          spaceXxxs: {
            comfortable: '2px',
            compact: '2px'
          },
          spaceXxs: {
            comfortable: '4px',
            compact: '4px'
          },
          spaceXs: {
            comfortable: '8px',
            compact: '8px'
          },
          spaceS: {
            comfortable: '12px',
            compact: '12px'
          },
          spaceM: {
            comfortable: '16px',
            compact: '16px'
          },
          spaceL: {
            comfortable: '20px',
            compact: '20px'
          },
          spaceXl: {
            comfortable: '24px',
            compact: '24px'
          },
          spaceXxl: {
            comfortable: '32px',
            compact: '32px'
          },
          spaceXxxl: {
            comfortable: '40px',
            compact: '40px'
          },
          sizeVerticalInput: {
            comfortable: '28px',
            compact: '28px'
          }
        }
      },
      'top-navigation': {
        id: 'top-navigation',
        selector: '.awsui-context-top-navigation',
        tokens: {
          colorGreyOpaque25: {
            light: 'rgba(255, 255, 255, 0.25)',
            dark: 'rgba(255, 255, 255, 0.25)'
          },
          colorGreyOpaque40: {
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.4)'
          },
          colorGreyOpaque50: {
            light: 'rgba(0, 0, 0, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyOpaque70: {
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(255, 255, 255, 0.7)'
          },
          colorGreyOpaque80: {
            light: 'rgba(22, 25, 31, 0.8)',
            dark: 'rgba(22, 25, 31, 0.8)'
          },
          colorGreyOpaque90: {
            light: 'rgba(242, 243, 243, 0.9)',
            dark: 'rgba(242, 243, 243, 0.9)'
          },
          colorGreyTransparent: {
            light: 'rgba(0, 0, 0, 0.3)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorGreyTransparentHeavy: {
            light: 'rgba(0, 0, 0, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyTransparentLight: {
            light: 'rgba(0, 0, 0, 0.3)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorBackgroundBadgeIcon: {
            light: '{colorRed500}',
            dark: '{colorRed500}'
          },
          colorBackgroundButtonLinkActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonLinkHover: {
            light: '{colorGrey750}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonNormalActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonNormalDefault: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalDisabled: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalHover: {
            light: '{colorGrey750}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonPrimaryActive: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDefault: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDisabled: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonPrimaryHover: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBackgroundCalendarCurrentDate: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCellShaded: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBackgroundCodeEditorGutterActiveLineError: {
            light: '{colorTextStatusError}',
            dark: '{colorTextStatusError}'
          },
          colorBackgroundCodeEditorGutterDefault: {
            light: '{colorGrey750}',
            dark: '{colorGrey750}'
          },
          colorBackgroundCodeEditorLoading: {
            light: '{colorBackgroundCodeEditorStatusBar}',
            dark: '{colorBackgroundCodeEditorStatusBar}'
          },
          colorBackgroundCodeEditorPaneItemHover: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBackgroundCodeEditorStatusBar: {
            light: '{colorGrey750}',
            dark: '{colorGrey750}'
          },
          colorBackgroundContainerContent: {
            light: '{colorAwsSquidInk}',
            dark: '{colorAwsSquidInk}'
          },
          colorBackgroundContainerHeader: {
            light: '{colorGrey750}',
            dark: '{colorGrey750}'
          },
          colorBackgroundControlChecked: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBackgroundControlDefault: {
            light: '{colorGrey800}',
            dark: '{colorGrey800}'
          },
          colorBackgroundControlDisabled: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemDefault: {
            light: '{colorAwsSquidInk}',
            dark: '{colorAwsSquidInk}'
          },
          colorBackgroundDropdownItemDimmed: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundDropdownItemFilterMatch: {
            light: '{colorBlue900}',
            dark: '{colorBlue900}'
          },
          colorBackgroundDropdownItemHover: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemSelected: {
            light: '{colorBackgroundItemSelected}',
            dark: '{colorBackgroundItemSelected}'
          },
          colorBackgroundHomeHeader: {
            light: '{colorBlack}',
            dark: '{colorBlack}'
          },
          colorBackgroundInputDefault: {
            light: '{colorGrey800}',
            dark: '{colorGrey800}'
          },
          colorBackgroundInputDisabled: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBackgroundItemSelected: {
            light: '{colorBlue900}',
            dark: '{colorBlue900}'
          },
          colorBackgroundLayoutMain: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorBackgroundLayoutMobilePanel: {
            light: '{colorBackgroundLayoutPanelContent}',
            dark: '{colorBackgroundLayoutPanelContent}'
          },
          colorBackgroundLayoutPanelContent: {
            light: '{colorBackgroundContainerContent}',
            dark: '{colorBackgroundContainerContent}'
          },
          colorBackgroundLayoutPanelHover: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBackgroundLayoutToggleActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundLayoutToggleDefault: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundLayoutToggleHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundLayoutToggleSelectedActive: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBackgroundLayoutToggleSelectedDefault: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorBackgroundLayoutToggleSelectedHover: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorBackgroundModalOverlay: {
            light: '{colorGreyOpaque80}',
            dark: '{colorGreyOpaque80}'
          },
          colorBackgroundNotificationBlue: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorBackgroundNotificationGreen: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBackgroundNotificationGrey: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBackgroundNotificationRed: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBackgroundNotificationYellow: {
            light: '{colorYellow600}',
            dark: '{colorYellow600}'
          },
          colorBackgroundNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundPopover: {
            light: '{colorGrey750}',
            dark: '{colorGrey750}'
          },
          colorBackgroundProgressBarContentDefault: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBackgroundProgressBarContentInFlash: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorBackgroundProgressBarLayoutDefault: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBackgroundProgressBarLayoutInFlash: {
            light: '{colorGreyOpaque25}',
            dark: '{colorGreyOpaque25}'
          },
          colorBackgroundSegmentActive: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSegmentDefault: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSegmentDisabled: {
            light: '{colorBackgroundButtonNormalDisabled}',
            dark: '{colorBackgroundButtonNormalDisabled}'
          },
          colorBackgroundSegmentHover: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSliderHandleDefault: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSliderHandleActive: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorBackgroundSliderTrack: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBackgroundSliderHandleRing: {
            light: '{colorGrey800}',
            dark: '{colorGrey800}'
          },
          colorBackgroundSliderErrorPressed: {
            light: '{colorRed500}',
            dark: '{colorRed500}'
          },
          colorBackgroundSliderWarningPressed: {
            light: '{colorYellow700}',
            dark: '{colorYellow700}'
          },
          colorBackgroundStatusError: {
            light: '{colorRed900}',
            dark: '{colorRed900}'
          },
          colorBackgroundStatusInfo: {
            light: '{colorBlue900}',
            dark: '{colorBlue900}'
          },
          colorBackgroundStatusSuccess: {
            light: '{colorGreen900}',
            dark: '{colorGreen900}'
          },
          colorBackgroundStatusWarning: {
            light: '{colorYellow900}',
            dark: '{colorYellow900}'
          },
          colorBackgroundTableHeader: {
            light: '{colorBackgroundContainerHeader}',
            dark: '{colorBackgroundContainerHeader}'
          },
          colorBackgroundTilesDisabled: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundToggleCheckedDisabled: {
            light: '{colorBlue700}',
            dark: '{colorBlue700}'
          },
          colorBackgroundToggleDefault: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalActive: {
            light: '{colorBorderButtonNormalDefault}',
            dark: '{colorBorderButtonNormalDefault}'
          },
          colorBorderButtonNormalDefault: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalDisabled: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderButtonNormalHover: {
            light: '{colorGrey400}',
            dark: '{colorGrey400}'
          },
          colorBorderButtonPrimaryDisabled: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderCalendarGrid: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderCalendarGridSelectedFocusRing: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderCodeEditorAceActiveLineLightTheme: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorBorderCodeEditorAceActiveLineDarkTheme: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorPaneItemHover: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderContainerDivider: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderContainerTop: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBorderControlChecked: {
            light: '{colorBackgroundControlChecked}',
            dark: '{colorBackgroundControlChecked}'
          },
          colorBorderControlDefault: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderControlDisabled: {
            light: '{colorBackgroundControlDisabled}',
            dark: '{colorBackgroundControlDisabled}'
          },
          colorBorderDividerActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderDividerDefault: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderDividerPanelBottom: {
            light: '{colorShadowSide}',
            dark: '{colorShadowSide}'
          },
          colorBorderDividerPanelSide: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDividerSecondary: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderDropdownContainer: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDropdownGroup: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemDefault: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderDropdownItemHover: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderDropdownItemDimmedHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderDropdownItemSelected: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemTop: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderEditableCellHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderInputDefault: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderInputDisabled: {
            light: '{colorBackgroundInputDisabled}',
            dark: '{colorBackgroundInputDisabled}'
          },
          colorBorderInputFocused: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderItemFocused: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBorderDropdownItemFocused: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBorderItemPlaceholder: {
            light: '{colorTransparent}',
            dark: '{colorTransparent}'
          },
          colorBorderItemSelected: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBorderLayout: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBorderPanelHeader: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderPopover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBorderSegmentActive: {
            light: '{colorBorderSegmentHover}',
            dark: '{colorBorderSegmentHover}'
          },
          colorBorderSegmentDefault: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderSegmentDisabled: {
            light: '{colorBorderButtonNormalDisabled}',
            dark: '{colorBorderButtonNormalDisabled}'
          },
          colorBorderSegmentHover: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorBorderStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBorderStatusInfo: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorBorderStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBorderStatusWarning: {
            light: '{colorYellow700}',
            dark: '{colorYellow700}'
          },
          colorBorderDividerInteractiveDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderTabsDivider: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderTabsShadow: {
            light: '{colorGreyTransparent}',
            dark: '{colorGreyTransparent}'
          },
          colorBorderTabsUnderline: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorBorderTilesDisabled: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorBorderTutorial: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorForegroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorForegroundControlDisabled: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorShadowDefault: {
            light: '{colorGreyTransparentHeavy}',
            dark: '{colorGreyTransparentHeavy}'
          },
          colorShadowMedium: {
            light: '{colorGreyTransparent}',
            dark: '{colorGreyTransparent}'
          },
          colorShadowSide: {
            light: '{colorGreyTransparentLight}',
            dark: '{colorGreyTransparentLight}'
          },
          colorStrokeChartLine: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorStrokeCodeEditorResizeHandler: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorStrokeCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey650}',
            dark: '{colorGrey650}'
          },
          colorStrokeCodeEditorGutterActiveLineHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextAccent: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorTextBodyDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextBodySecondary: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbCurrent: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbIcon: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextButtonInlineIconDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconHover: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorTextButtonNormalActive: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextButtonNormalDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextButtonNormalHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextLinkButtonNormalDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextLinkButtonNormalHover: {
            light: '{colorTextButtonNormalHover}',
            dark: '{colorTextButtonNormalHover}'
          },
          colorTextLinkButtonNormalActive: {
            light: '{colorTextButtonNormalActive}',
            dark: '{colorTextButtonNormalActive}'
          },
          colorTextButtonPrimaryActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextCalendarDateHover: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarDateSelected: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarMonth: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextCodeEditorGutterActiveLine: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextCodeEditorGutterDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextCodeEditorStatusBarDisabled: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorTextCodeEditorTabButtonError: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextColumnHeader: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextColumnSortingIcon: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextControlDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextCounter: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextDisabled: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorTextDisabledInlineEdit: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextDropdownFooter: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownGroupLabel: {
            light: '{colorTextGroupLabel}',
            dark: '{colorTextGroupLabel}'
          },
          colorTextDropdownItemDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextDropdownItemDimmed: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemFilterMatch: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorTextDropdownItemHighlighted: {
            light: '{colorGrey200}',
            dark: '{colorGrey200}'
          },
          colorTextDropdownItemSecondary: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownItemSecondaryHover: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextEmpty: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextExpandableSectionDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextExpandableSectionHover: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorTextExpandableSectionNavigationIconDefault: {
            light: '{colorTextIconCaret}',
            dark: '{colorTextIconCaret}'
          },
          colorTextFormDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextFormLabel: {
            light: '{colorTextFormDefault}',
            dark: '{colorTextFormDefault}'
          },
          colorTextFormSecondary: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextGroupLabel: {
            light: '{colorTextLabel}',
            dark: '{colorTextLabel}'
          },
          colorTextLabelGenAi: {
            light: '{colorPurple400}',
            dark: '{colorPurple400}'
          },
          colorTextHeadingDefault: {
            light: '{colorGrey200}',
            dark: '{colorGrey200}'
          },
          colorTextHeadingSecondary: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextHomeHeaderDefault: {
            light: '{colorGrey200}',
            dark: '{colorGrey200}'
          },
          colorTextHomeHeaderSecondary: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextIconCaret: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextIconSubtle: {
            light: '{colorGrey400}',
            dark: '{colorGrey400}'
          },
          colorTextInputDisabled: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorTextInputPlaceholder: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorTextInputPlaceholderDisabled: {
            light: '{colorTextInputPlaceholder}',
            dark: '{colorTextInputPlaceholder}'
          },
          colorTextInteractiveActive: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveDisabled: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorTextInteractiveHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveInvertedDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveInvertedHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextInverted: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextLabel: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextLayoutToggle: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextLayoutToggleActive: {
            light: '{colorGrey800}',
            dark: '{colorGrey800}'
          },
          colorTextLayoutToggleHover: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorTextLayoutToggleSelected: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextLinkDefault: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorTextLinkHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue300}'
          },
          colorTextLinkInvertedHover: {
            light: '{colorTextNotificationDefault}',
            dark: '{colorTextNotificationDefault}'
          },
          colorTextLinkButtonUnderline: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextLinkButtonUnderlineHover: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextNotificationDefault: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextNotificationStackBar: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorTextNotificationYellow: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextPaginationPageNumberActiveDisabled: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextPaginationPageNumberDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextSegmentActive: {
            light: '{colorGrey800}',
            dark: '{colorGrey800}'
          },
          colorTextSegmentDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextSegmentHover: {
            light: '{colorBlue500}',
            dark: '{colorBlue500}'
          },
          colorTextSmall: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextStatusError: {
            light: '{colorRed500}',
            dark: '{colorRed500}'
          },
          colorTextStatusInactive: {
            light: '{colorGrey450}',
            dark: '{colorGrey450}'
          },
          colorTextStatusInfo: {
            light: '{colorBlue400}',
            dark: '{colorBlue400}'
          },
          colorTextStatusSuccess: {
            light: '{colorGreen500}',
            dark: '{colorGreen500}'
          },
          colorTextStatusWarning: {
            light: '{colorYellow700}',
            dark: '{colorYellow700}'
          },
          colorTextTopNavigationTitle: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorBoardPlaceholderActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBoardPlaceholderHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorDragPlaceholderActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorDragPlaceholderHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorDropzoneBackgroundActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorDropzoneBackgroundHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorDropzoneTextActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorDropzoneTextHover: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          }
        }
      },
      flashbar: {
        id: 'flashbar',
        selector: '.awsui-context-flashbar',
        tokens: {
          colorGreyOpaque25: {
            light: 'rgba(255, 255, 255, 0.25)',
            dark: 'rgba(255, 255, 255, 0.25)'
          },
          colorGreyOpaque40: {
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.4)'
          },
          colorGreyOpaque50: {
            light: 'rgba(0, 0, 0, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyOpaque70: {
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(255, 255, 255, 0.7)'
          },
          colorGreyOpaque80: {
            light: 'rgba(22, 25, 31, 0.8)',
            dark: 'rgba(22, 25, 31, 0.8)'
          },
          colorGreyOpaque90: {
            light: 'rgba(242, 243, 243, 0.9)',
            dark: 'rgba(242, 243, 243, 0.9)'
          },
          colorGreyTransparent: {
            light: 'rgba(0, 28, 36, 0.3)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorGreyTransparentHeavy: {
            light: 'rgba(0, 28, 36, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyTransparentLight: {
            light: 'rgba(0, 28, 36, 0.15)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorBackgroundBadgeIcon: {
            light: '{colorRed600}',
            dark: '{colorRed500}'
          },
          colorBackgroundButtonLinkActive: {
            light: '{colorGrey200}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonLinkHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonNormalActive: {
            light: '{colorGrey200}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonNormalDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonPrimaryActive: {
            light: '{colorBlue900}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonPrimaryHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue500}'
          },
          colorBackgroundCalendarCurrentDate: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCellShaded: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBackgroundCodeEditorGutterActiveLineError: {
            light: '{colorTextStatusError}',
            dark: '{colorTextStatusError}'
          },
          colorBackgroundCodeEditorGutterDefault: {
            light: '{colorGrey150}',
            dark: '{colorGrey750}'
          },
          colorBackgroundCodeEditorLoading: {
            light: '{colorBackgroundCodeEditorStatusBar}',
            dark: '{colorBackgroundCodeEditorStatusBar}'
          },
          colorBackgroundCodeEditorPaneItemHover: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundCodeEditorStatusBar: {
            light: '{colorGrey150}',
            dark: '{colorGrey750}'
          },
          colorBackgroundContainerContent: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundContainerHeader: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundControlChecked: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundControlDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundDropdownItemDimmed: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundDropdownItemFilterMatch: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundDropdownItemHover: {
            light: '{colorGrey150}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemSelected: {
            light: '{colorBackgroundItemSelected}',
            dark: '{colorBackgroundItemSelected}'
          },
          colorBackgroundHomeHeader: {
            light: '{colorBlack}',
            dark: '{colorBlack}'
          },
          colorBackgroundInputDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundInputDisabled: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundItemSelected: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundLayoutMain: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundLayoutMobilePanel: {
            light: '{colorBackgroundLayoutPanelContent}',
            dark: '{colorBackgroundLayoutPanelContent}'
          },
          colorBackgroundLayoutPanelContent: {
            light: '{colorBackgroundContainerContent}',
            dark: '{colorBackgroundContainerContent}'
          },
          colorBackgroundLayoutPanelHover: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundLayoutToggleActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundLayoutToggleDefault: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundLayoutToggleHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundLayoutToggleSelectedActive: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundLayoutToggleSelectedDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorBackgroundLayoutToggleSelectedHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue400}'
          },
          colorBackgroundModalOverlay: {
            light: '{colorGreyOpaque90}',
            dark: '{colorGreyOpaque80}'
          },
          colorBackgroundNotificationBlue: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorBackgroundNotificationGreen: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBackgroundNotificationGrey: {
            light: '{colorGrey600}',
            dark: '{colorGrey550}'
          },
          colorBackgroundNotificationRed: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBackgroundNotificationYellow: {
            light: '{colorYellow600}',
            dark: '{colorYellow600}'
          },
          colorBackgroundNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundPopover: {
            light: '{colorWhite}',
            dark: '{colorGrey750}'
          },
          colorBackgroundProgressBarContentDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundProgressBarContentInFlash: {
            light: '{colorGreyOpaque70}',
            dark: '{colorGrey100}'
          },
          colorBackgroundProgressBarLayoutDefault: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundProgressBarLayoutInFlash: {
            light: '{colorGreyOpaque25}',
            dark: '{colorGreyOpaque25}'
          },
          colorBackgroundSegmentActive: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSegmentDefault: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSegmentDisabled: {
            light: '{colorBackgroundButtonNormalDisabled}',
            dark: '{colorBackgroundButtonNormalDisabled}'
          },
          colorBackgroundSegmentHover: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSliderHandleDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSliderHandleActive: {
            light: '{colorBlue700}',
            dark: '{colorBlue400}'
          },
          colorBackgroundSliderTrack: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorBackgroundSliderHandleRing: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundSliderErrorPressed: {
            light: '{colorRed700}',
            dark: '{colorRed500}'
          },
          colorBackgroundSliderWarningPressed: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorBackgroundStatusError: {
            light: '{colorRed100}',
            dark: '{colorRed900}'
          },
          colorBackgroundStatusInfo: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundStatusSuccess: {
            light: '{colorGreen100}',
            dark: '{colorGreen900}'
          },
          colorBackgroundStatusWarning: {
            light: '{colorYellow100}',
            dark: '{colorYellow900}'
          },
          colorBackgroundTableHeader: {
            light: '{colorBackgroundContainerHeader}',
            dark: '{colorBackgroundContainerHeader}'
          },
          colorBackgroundTilesDisabled: {
            light: '{colorGrey200}',
            dark: '{colorGrey700}'
          },
          colorBackgroundToggleCheckedDisabled: {
            light: '{colorBlue300}',
            dark: '{colorBlue700}'
          },
          colorBackgroundToggleDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalActive: {
            light: '{colorBorderButtonNormalDefault}',
            dark: '{colorBorderButtonNormalDefault}'
          },
          colorBorderButtonNormalDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderButtonNormalHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey400}'
          },
          colorBorderButtonPrimaryDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderCalendarGrid: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderCalendarGridSelectedFocusRing: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderCodeEditorAceActiveLineLightTheme: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorBorderCodeEditorAceActiveLineDarkTheme: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorPaneItemHover: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderContainerDivider: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderContainerTop: {
            light: '{colorGrey200}',
            dark: '{colorGrey700}'
          },
          colorBorderControlChecked: {
            light: '{colorBackgroundControlChecked}',
            dark: '{colorBackgroundControlChecked}'
          },
          colorBorderControlDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderControlDisabled: {
            light: '{colorBackgroundControlDisabled}',
            dark: '{colorBackgroundControlDisabled}'
          },
          colorBorderDividerActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderDividerDefault: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorBorderDividerPanelBottom: {
            light: '{colorShadowSide}',
            dark: '{colorShadowSide}'
          },
          colorBorderDividerPanelSide: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDividerSecondary: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBorderDropdownContainer: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDropdownGroup: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemDefault: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderDropdownItemHover: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderDropdownItemDimmedHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderDropdownItemSelected: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemTop: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderEditableCellHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderInputDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderInputDisabled: {
            light: '{colorBackgroundInputDisabled}',
            dark: '{colorBackgroundInputDisabled}'
          },
          colorBorderInputFocused: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderItemFocused: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorBorderDropdownItemFocused: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderItemPlaceholder: {
            light: '{colorTransparent}',
            dark: '{colorTransparent}'
          },
          colorBorderItemSelected: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderLayout: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBorderPanelHeader: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderPopover: {
            light: '{colorGrey300}',
            dark: '{colorGrey600}'
          },
          colorBorderSegmentActive: {
            light: '{colorBorderSegmentHover}',
            dark: '{colorBorderSegmentHover}'
          },
          colorBorderSegmentDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderSegmentDisabled: {
            light: '{colorBorderButtonNormalDisabled}',
            dark: '{colorBorderButtonNormalDisabled}'
          },
          colorBorderSegmentHover: {
            light: '{colorGrey900}',
            dark: '{colorWhite}'
          },
          colorBorderStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBorderStatusInfo: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBorderStatusWarning: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorBorderDividerInteractiveDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderTabsDivider: {
            light: '{colorGrey400}',
            dark: '{colorGrey650}'
          },
          colorBorderTabsShadow: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorGreyTransparent}'
          },
          colorBorderTabsUnderline: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorBorderTilesDisabled: {
            light: '{colorTransparent}',
            dark: '{colorGrey650}'
          },
          colorBorderTutorial: {
            light: '{colorGrey400}',
            dark: '{colorGrey500}'
          },
          colorForegroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorForegroundControlDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey550}'
          },
          colorShadowDefault: {
            light: '{colorGreyTransparentHeavy}',
            dark: '{colorGreyTransparentHeavy}'
          },
          colorShadowMedium: {
            light: '{colorGreyTransparent}',
            dark: '{colorGreyTransparent}'
          },
          colorShadowSide: {
            light: '{colorGreyTransparentLight}',
            dark: '{colorGreyTransparentLight}'
          },
          colorStrokeChartLine: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorStrokeCodeEditorResizeHandler: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorStrokeCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorStrokeCodeEditorGutterActiveLineHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey900}'
          },
          colorTextAccent: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextBodyDefault: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextBodySecondary: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbCurrent: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbIcon: {
            light: '{colorGrey550}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextButtonInlineIconDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconHover: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorTextButtonNormalActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextButtonNormalDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextButtonNormalHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextLinkButtonNormalDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextLinkButtonNormalHover: {
            light: '{colorTextButtonNormalHover}',
            dark: '{colorTextButtonNormalHover}'
          },
          colorTextLinkButtonNormalActive: {
            light: '{colorTextButtonNormalActive}',
            dark: '{colorTextButtonNormalActive}'
          },
          colorTextButtonPrimaryActive: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryHover: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextCalendarDateHover: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarDateSelected: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarMonth: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextCodeEditorGutterActiveLine: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextCodeEditorGutterDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextCodeEditorStatusBarDisabled: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorTextCodeEditorTabButtonError: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextColumnHeader: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextColumnSortingIcon: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextControlDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextCounter: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextDisabled: {
            light: '{colorGrey400}',
            dark: '{colorGrey550}'
          },
          colorTextDisabledInlineEdit: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextDropdownFooter: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownGroupLabel: {
            light: '{colorTextGroupLabel}',
            dark: '{colorTextGroupLabel}'
          },
          colorTextDropdownItemDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextDropdownItemDimmed: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemFilterMatch: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextDropdownItemHighlighted: {
            light: '{colorGrey900}',
            dark: '{colorGrey200}'
          },
          colorTextDropdownItemSecondary: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownItemSecondaryHover: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextEmpty: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextExpandableSectionDefault: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextExpandableSectionHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextExpandableSectionNavigationIconDefault: {
            light: '{colorTextIconCaret}',
            dark: '{colorTextIconCaret}'
          },
          colorTextFormDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextFormLabel: {
            light: '{colorTextFormDefault}',
            dark: '{colorTextFormDefault}'
          },
          colorTextFormSecondary: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextGroupLabel: {
            light: '{colorTextLabel}',
            dark: '{colorTextLabel}'
          },
          colorTextLabelGenAi: {
            light: '{colorPurple600}',
            dark: '{colorPurple400}'
          },
          colorTextHeadingDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey200}'
          },
          colorTextHeadingSecondary: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextHomeHeaderDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey200}'
          },
          colorTextHomeHeaderSecondary: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextIconCaret: {
            light: '{colorGrey500}',
            dark: '{colorGrey450}'
          },
          colorTextIconSubtle: {
            light: '{colorGrey550}',
            dark: '{colorGrey400}'
          },
          colorTextInputDisabled: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorTextInputPlaceholder: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorTextInputPlaceholderDisabled: {
            light: '{colorTextInputPlaceholder}',
            dark: '{colorTextInputPlaceholder}'
          },
          colorTextInteractiveActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveDisabled: {
            light: '{colorGrey400}',
            dark: '{colorGrey550}'
          },
          colorTextInteractiveHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveInvertedDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveInvertedHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextInverted: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextLabel: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextLayoutToggle: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextLayoutToggleActive: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorTextLayoutToggleHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorTextLayoutToggleSelected: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextLinkDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextLinkHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue300}'
          },
          colorTextLinkInvertedHover: {
            light: '{colorTextNotificationDefault}',
            dark: '{colorTextNotificationDefault}'
          },
          colorTextLinkButtonUnderline: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextLinkButtonUnderlineHover: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextNotificationDefault: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextNotificationStackBar: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorTextNotificationYellow: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextPaginationPageNumberActiveDisabled: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextPaginationPageNumberDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextSegmentActive: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorTextSegmentDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextSegmentHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorTextSmall: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed500}'
          },
          colorTextStatusInactive: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextStatusInfo: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen500}'
          },
          colorTextStatusWarning: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorTextTopNavigationTitle: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorBoardPlaceholderActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorBoardPlaceholderHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDragPlaceholderActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorDragPlaceholderHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDropzoneBackgroundActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorDropzoneBackgroundHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDropzoneTextActive: {
            light: '{colorGrey600}',
            dark: '{colorGrey900}'
          },
          colorDropzoneTextHover: {
            light: '{colorBlue900}',
            dark: '{colorWhite}'
          }
        }
      },
      'flashbar-warning': {
        id: 'flashbar-warning',
        selector: '.awsui-context-flashbar-warning',
        tokens: {
          colorGreyOpaque25: {
            light: 'rgba(255, 255, 255, 0.25)',
            dark: 'rgba(255, 255, 255, 0.25)'
          },
          colorGreyOpaque40: {
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.4)'
          },
          colorGreyOpaque50: {
            light: 'rgba(0, 0, 0, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyOpaque70: {
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(255, 255, 255, 0.7)'
          },
          colorGreyOpaque80: {
            light: 'rgba(22, 25, 31, 0.8)',
            dark: 'rgba(22, 25, 31, 0.8)'
          },
          colorGreyOpaque90: {
            light: 'rgba(242, 243, 243, 0.9)',
            dark: 'rgba(242, 243, 243, 0.9)'
          },
          colorGreyTransparent: {
            light: 'rgba(0, 28, 36, 0.3)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorGreyTransparentHeavy: {
            light: 'rgba(0, 28, 36, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyTransparentLight: {
            light: 'rgba(0, 28, 36, 0.15)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorBackgroundBadgeIcon: {
            light: '{colorRed600}',
            dark: '{colorRed500}'
          },
          colorBackgroundButtonLinkActive: {
            light: '{colorGrey200}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonLinkHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonNormalActive: {
            light: '{colorGrey200}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonNormalDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonPrimaryActive: {
            light: '{colorBlue900}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonPrimaryHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue500}'
          },
          colorBackgroundCalendarCurrentDate: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCellShaded: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBackgroundCodeEditorGutterActiveLineError: {
            light: '{colorTextStatusError}',
            dark: '{colorTextStatusError}'
          },
          colorBackgroundCodeEditorGutterDefault: {
            light: '{colorGrey150}',
            dark: '{colorGrey750}'
          },
          colorBackgroundCodeEditorLoading: {
            light: '{colorBackgroundCodeEditorStatusBar}',
            dark: '{colorBackgroundCodeEditorStatusBar}'
          },
          colorBackgroundCodeEditorPaneItemHover: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundCodeEditorStatusBar: {
            light: '{colorGrey150}',
            dark: '{colorGrey750}'
          },
          colorBackgroundContainerContent: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundContainerHeader: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundControlChecked: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundControlDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundDropdownItemDimmed: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundDropdownItemFilterMatch: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundDropdownItemHover: {
            light: '{colorGrey150}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemSelected: {
            light: '{colorBackgroundItemSelected}',
            dark: '{colorBackgroundItemSelected}'
          },
          colorBackgroundHomeHeader: {
            light: '{colorBlack}',
            dark: '{colorBlack}'
          },
          colorBackgroundInputDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundInputDisabled: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundItemSelected: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundLayoutMain: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundLayoutMobilePanel: {
            light: '{colorBackgroundLayoutPanelContent}',
            dark: '{colorBackgroundLayoutPanelContent}'
          },
          colorBackgroundLayoutPanelContent: {
            light: '{colorBackgroundContainerContent}',
            dark: '{colorBackgroundContainerContent}'
          },
          colorBackgroundLayoutPanelHover: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundLayoutToggleActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundLayoutToggleDefault: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundLayoutToggleHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundLayoutToggleSelectedActive: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundLayoutToggleSelectedDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorBackgroundLayoutToggleSelectedHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue400}'
          },
          colorBackgroundModalOverlay: {
            light: '{colorGreyOpaque90}',
            dark: '{colorGreyOpaque80}'
          },
          colorBackgroundNotificationBlue: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorBackgroundNotificationGreen: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBackgroundNotificationGrey: {
            light: '{colorGrey600}',
            dark: '{colorGrey550}'
          },
          colorBackgroundNotificationRed: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBackgroundNotificationYellow: {
            light: '{colorYellow600}',
            dark: '{colorYellow600}'
          },
          colorBackgroundNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundPopover: {
            light: '{colorWhite}',
            dark: '{colorGrey750}'
          },
          colorBackgroundProgressBarContentDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundProgressBarContentInFlash: {
            light: '{colorGreyOpaque70}',
            dark: '{colorGrey100}'
          },
          colorBackgroundProgressBarLayoutDefault: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundProgressBarLayoutInFlash: {
            light: '{colorGreyOpaque25}',
            dark: '{colorGreyOpaque25}'
          },
          colorBackgroundSegmentActive: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSegmentDefault: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSegmentDisabled: {
            light: '{colorBackgroundButtonNormalDisabled}',
            dark: '{colorBackgroundButtonNormalDisabled}'
          },
          colorBackgroundSegmentHover: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSliderHandleDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSliderHandleActive: {
            light: '{colorBlue700}',
            dark: '{colorBlue400}'
          },
          colorBackgroundSliderTrack: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorBackgroundSliderHandleRing: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundSliderErrorPressed: {
            light: '{colorRed700}',
            dark: '{colorRed500}'
          },
          colorBackgroundSliderWarningPressed: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorBackgroundStatusError: {
            light: '{colorRed100}',
            dark: '{colorRed900}'
          },
          colorBackgroundStatusInfo: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundStatusSuccess: {
            light: '{colorGreen100}',
            dark: '{colorGreen900}'
          },
          colorBackgroundStatusWarning: {
            light: '{colorYellow100}',
            dark: '{colorYellow900}'
          },
          colorBackgroundTableHeader: {
            light: '{colorBackgroundContainerHeader}',
            dark: '{colorBackgroundContainerHeader}'
          },
          colorBackgroundTilesDisabled: {
            light: '{colorGrey200}',
            dark: '{colorGrey700}'
          },
          colorBackgroundToggleCheckedDisabled: {
            light: '{colorBlue300}',
            dark: '{colorBlue700}'
          },
          colorBackgroundToggleDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalActive: {
            light: '{colorBorderButtonNormalDefault}',
            dark: '{colorBorderButtonNormalDefault}'
          },
          colorBorderButtonNormalDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderButtonNormalHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey400}'
          },
          colorBorderButtonPrimaryDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderCalendarGrid: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderCalendarGridSelectedFocusRing: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderCodeEditorAceActiveLineLightTheme: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorBorderCodeEditorAceActiveLineDarkTheme: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorPaneItemHover: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderContainerDivider: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderContainerTop: {
            light: '{colorGrey200}',
            dark: '{colorGrey700}'
          },
          colorBorderControlChecked: {
            light: '{colorBackgroundControlChecked}',
            dark: '{colorBackgroundControlChecked}'
          },
          colorBorderControlDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderControlDisabled: {
            light: '{colorBackgroundControlDisabled}',
            dark: '{colorBackgroundControlDisabled}'
          },
          colorBorderDividerActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderDividerDefault: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorBorderDividerPanelBottom: {
            light: '{colorShadowSide}',
            dark: '{colorShadowSide}'
          },
          colorBorderDividerPanelSide: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDividerSecondary: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBorderDropdownContainer: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDropdownGroup: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemDefault: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderDropdownItemHover: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderDropdownItemDimmedHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderDropdownItemSelected: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemTop: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderEditableCellHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderInputDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderInputDisabled: {
            light: '{colorBackgroundInputDisabled}',
            dark: '{colorBackgroundInputDisabled}'
          },
          colorBorderInputFocused: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderItemFocused: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorBorderDropdownItemFocused: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderItemPlaceholder: {
            light: '{colorTransparent}',
            dark: '{colorTransparent}'
          },
          colorBorderItemSelected: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderLayout: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBorderPanelHeader: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderPopover: {
            light: '{colorGrey300}',
            dark: '{colorGrey600}'
          },
          colorBorderSegmentActive: {
            light: '{colorBorderSegmentHover}',
            dark: '{colorBorderSegmentHover}'
          },
          colorBorderSegmentDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderSegmentDisabled: {
            light: '{colorBorderButtonNormalDisabled}',
            dark: '{colorBorderButtonNormalDisabled}'
          },
          colorBorderSegmentHover: {
            light: '{colorGrey900}',
            dark: '{colorWhite}'
          },
          colorBorderStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBorderStatusInfo: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBorderStatusWarning: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorBorderDividerInteractiveDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderTabsDivider: {
            light: '{colorGrey400}',
            dark: '{colorGrey650}'
          },
          colorBorderTabsShadow: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorGreyTransparent}'
          },
          colorBorderTabsUnderline: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorBorderTilesDisabled: {
            light: '{colorTransparent}',
            dark: '{colorGrey650}'
          },
          colorBorderTutorial: {
            light: '{colorGrey400}',
            dark: '{colorGrey500}'
          },
          colorForegroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorForegroundControlDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey550}'
          },
          colorShadowDefault: {
            light: '{colorGreyTransparentHeavy}',
            dark: '{colorGreyTransparentHeavy}'
          },
          colorShadowMedium: {
            light: '{colorGreyTransparent}',
            dark: '{colorGreyTransparent}'
          },
          colorShadowSide: {
            light: '{colorGreyTransparentLight}',
            dark: '{colorGreyTransparentLight}'
          },
          colorStrokeChartLine: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorStrokeCodeEditorResizeHandler: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorStrokeCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorStrokeCodeEditorGutterActiveLineHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey900}'
          },
          colorTextAccent: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextBodyDefault: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorTextBodySecondary: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbCurrent: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbIcon: {
            light: '{colorGrey550}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextButtonInlineIconDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconHover: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorTextButtonNormalActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextButtonNormalDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextButtonNormalHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextLinkButtonNormalDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextLinkButtonNormalHover: {
            light: '{colorTextButtonNormalHover}',
            dark: '{colorTextButtonNormalHover}'
          },
          colorTextLinkButtonNormalActive: {
            light: '{colorTextButtonNormalActive}',
            dark: '{colorTextButtonNormalActive}'
          },
          colorTextButtonPrimaryActive: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryHover: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextCalendarDateHover: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarDateSelected: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarMonth: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextCodeEditorGutterActiveLine: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextCodeEditorGutterDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextCodeEditorStatusBarDisabled: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorTextCodeEditorTabButtonError: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextColumnHeader: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextColumnSortingIcon: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextControlDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextCounter: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextDisabled: {
            light: '{colorGrey400}',
            dark: '{colorGrey550}'
          },
          colorTextDisabledInlineEdit: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextDropdownFooter: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownGroupLabel: {
            light: '{colorTextGroupLabel}',
            dark: '{colorTextGroupLabel}'
          },
          colorTextDropdownItemDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextDropdownItemDimmed: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemFilterMatch: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextDropdownItemHighlighted: {
            light: '{colorGrey900}',
            dark: '{colorGrey200}'
          },
          colorTextDropdownItemSecondary: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownItemSecondaryHover: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextEmpty: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextExpandableSectionDefault: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorTextExpandableSectionHover: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorTextExpandableSectionNavigationIconDefault: {
            light: '{colorTextIconCaret}',
            dark: '{colorTextIconCaret}'
          },
          colorTextFormDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextFormLabel: {
            light: '{colorTextFormDefault}',
            dark: '{colorTextFormDefault}'
          },
          colorTextFormSecondary: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextGroupLabel: {
            light: '{colorTextLabel}',
            dark: '{colorTextLabel}'
          },
          colorTextLabelGenAi: {
            light: '{colorPurple600}',
            dark: '{colorPurple400}'
          },
          colorTextHeadingDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey200}'
          },
          colorTextHeadingSecondary: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorTextHomeHeaderDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey200}'
          },
          colorTextHomeHeaderSecondary: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextIconCaret: {
            light: '{colorGrey500}',
            dark: '{colorGrey450}'
          },
          colorTextIconSubtle: {
            light: '{colorGrey550}',
            dark: '{colorGrey400}'
          },
          colorTextInputDisabled: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorTextInputPlaceholder: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorTextInputPlaceholderDisabled: {
            light: '{colorTextInputPlaceholder}',
            dark: '{colorTextInputPlaceholder}'
          },
          colorTextInteractiveActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveDisabled: {
            light: '{colorGrey400}',
            dark: '{colorGrey550}'
          },
          colorTextInteractiveHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveInvertedDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorTextInteractiveInvertedHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextInverted: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextLabel: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextLayoutToggle: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextLayoutToggleActive: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorTextLayoutToggleHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorTextLayoutToggleSelected: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextLinkDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextLinkHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue300}'
          },
          colorTextLinkInvertedHover: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorTextLinkButtonUnderline: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextLinkButtonUnderlineHover: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextNotificationDefault: {
            light: '{colorTextNotificationYellow}',
            dark: '{colorTextNotificationYellow}'
          },
          colorTextNotificationStackBar: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorTextNotificationYellow: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextPaginationPageNumberActiveDisabled: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextPaginationPageNumberDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextSegmentActive: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorTextSegmentDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextSegmentHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorTextSmall: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed500}'
          },
          colorTextStatusInactive: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextStatusInfo: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen500}'
          },
          colorTextStatusWarning: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorTextTopNavigationTitle: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorBoardPlaceholderActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorBoardPlaceholderHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDragPlaceholderActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorDragPlaceholderHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDropzoneBackgroundActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorDropzoneBackgroundHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDropzoneTextActive: {
            light: '{colorGrey600}',
            dark: '{colorGrey900}'
          },
          colorDropzoneTextHover: {
            light: '{colorBlue900}',
            dark: '{colorWhite}'
          }
        }
      },
      alert: {
        id: 'alert',
        selector: '.awsui-context-alert',
        tokens: {
          colorGreyOpaque25: {
            light: 'rgba(255, 255, 255, 0.25)',
            dark: 'rgba(255, 255, 255, 0.25)'
          },
          colorGreyOpaque40: {
            light: 'rgba(0, 0, 0, 0.4)',
            dark: 'rgba(0, 0, 0, 0.4)'
          },
          colorGreyOpaque50: {
            light: 'rgba(0, 0, 0, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyOpaque70: {
            light: 'rgba(255, 255, 255, 0.7)',
            dark: 'rgba(255, 255, 255, 0.7)'
          },
          colorGreyOpaque80: {
            light: 'rgba(22, 25, 31, 0.8)',
            dark: 'rgba(22, 25, 31, 0.8)'
          },
          colorGreyOpaque90: {
            light: 'rgba(242, 243, 243, 0.9)',
            dark: 'rgba(242, 243, 243, 0.9)'
          },
          colorGreyTransparent: {
            light: 'rgba(0, 28, 36, 0.3)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorGreyTransparentHeavy: {
            light: 'rgba(0, 28, 36, 0.5)',
            dark: 'rgba(0, 0, 0, 0.5)'
          },
          colorGreyTransparentLight: {
            light: 'rgba(0, 28, 36, 0.15)',
            dark: 'rgba(0, 0, 0, 0.3)'
          },
          colorBackgroundBadgeIcon: {
            light: '{colorRed600}',
            dark: '{colorRed500}'
          },
          colorBackgroundButtonLinkActive: {
            light: '{colorGrey200}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonLinkHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonNormalActive: {
            light: '{colorGrey200}',
            dark: '{colorGrey900}'
          },
          colorBackgroundButtonNormalDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonNormalHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundButtonPrimaryActive: {
            light: '{colorBlue900}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorBackgroundButtonPrimaryDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundButtonPrimaryHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue500}'
          },
          colorBackgroundCalendarCurrentDate: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCellShaded: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBackgroundCodeEditorGutterActiveLineError: {
            light: '{colorTextStatusError}',
            dark: '{colorTextStatusError}'
          },
          colorBackgroundCodeEditorGutterDefault: {
            light: '{colorGrey150}',
            dark: '{colorGrey750}'
          },
          colorBackgroundCodeEditorLoading: {
            light: '{colorBackgroundCodeEditorStatusBar}',
            dark: '{colorBackgroundCodeEditorStatusBar}'
          },
          colorBackgroundCodeEditorPaneItemHover: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundCodeEditorStatusBar: {
            light: '{colorGrey150}',
            dark: '{colorGrey750}'
          },
          colorBackgroundContainerContent: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundContainerHeader: {
            light: '{colorGrey100}',
            dark: '{colorGrey750}'
          },
          colorBackgroundControlChecked: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundControlDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey700}'
          },
          colorBackgroundDropdownItemDimmed: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundDropdownItemFilterMatch: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundDropdownItemHover: {
            light: '{colorGrey150}',
            dark: '{colorGrey650}'
          },
          colorBackgroundDropdownItemSelected: {
            light: '{colorBackgroundItemSelected}',
            dark: '{colorBackgroundItemSelected}'
          },
          colorBackgroundHomeHeader: {
            light: '{colorBlack}',
            dark: '{colorBlack}'
          },
          colorBackgroundInputDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundInputDisabled: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundItemSelected: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundLayoutMain: {
            light: '{colorGrey150}',
            dark: '{colorGrey900}'
          },
          colorBackgroundLayoutMobilePanel: {
            light: '{colorBackgroundLayoutPanelContent}',
            dark: '{colorBackgroundLayoutPanelContent}'
          },
          colorBackgroundLayoutPanelContent: {
            light: '{colorBackgroundContainerContent}',
            dark: '{colorBackgroundContainerContent}'
          },
          colorBackgroundLayoutPanelHover: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundLayoutToggleActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundLayoutToggleDefault: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBackgroundLayoutToggleHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundLayoutToggleSelectedActive: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundLayoutToggleSelectedDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorBackgroundLayoutToggleSelectedHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue400}'
          },
          colorBackgroundModalOverlay: {
            light: '{colorGreyOpaque90}',
            dark: '{colorGreyOpaque80}'
          },
          colorBackgroundNotificationBlue: {
            light: '{colorBlue600}',
            dark: '{colorBlue600}'
          },
          colorBackgroundNotificationGreen: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBackgroundNotificationGrey: {
            light: '{colorGrey600}',
            dark: '{colorGrey550}'
          },
          colorBackgroundNotificationRed: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBackgroundNotificationYellow: {
            light: '{colorYellow600}',
            dark: '{colorYellow600}'
          },
          colorBackgroundNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarActive: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBackgroundNotificationStackBarHover: {
            light: '{colorGrey600}',
            dark: '{colorGrey600}'
          },
          colorBackgroundPopover: {
            light: '{colorWhite}',
            dark: '{colorGrey750}'
          },
          colorBackgroundProgressBarContentDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundProgressBarContentInFlash: {
            light: '{colorGreyOpaque70}',
            dark: '{colorGrey100}'
          },
          colorBackgroundProgressBarLayoutDefault: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBackgroundProgressBarLayoutInFlash: {
            light: '{colorGreyOpaque25}',
            dark: '{colorGreyOpaque25}'
          },
          colorBackgroundSegmentActive: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSegmentDefault: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSegmentDisabled: {
            light: '{colorBackgroundButtonNormalDisabled}',
            dark: '{colorBackgroundButtonNormalDisabled}'
          },
          colorBackgroundSegmentHover: {
            light: '{colorBackgroundButtonNormalDefault}',
            dark: '{colorBackgroundButtonNormalDefault}'
          },
          colorBackgroundSliderHandleDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBackgroundSliderHandleActive: {
            light: '{colorBlue700}',
            dark: '{colorBlue400}'
          },
          colorBackgroundSliderTrack: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorBackgroundSliderHandleRing: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorBackgroundSliderErrorPressed: {
            light: '{colorRed700}',
            dark: '{colorRed500}'
          },
          colorBackgroundSliderWarningPressed: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorBackgroundStatusError: {
            light: '{colorRed100}',
            dark: '{colorRed900}'
          },
          colorBackgroundStatusInfo: {
            light: '{colorBlue100}',
            dark: '{colorBlue900}'
          },
          colorBackgroundStatusSuccess: {
            light: '{colorGreen100}',
            dark: '{colorGreen900}'
          },
          colorBackgroundStatusWarning: {
            light: '{colorYellow100}',
            dark: '{colorYellow900}'
          },
          colorBackgroundTableHeader: {
            light: '{colorBackgroundContainerHeader}',
            dark: '{colorBackgroundContainerHeader}'
          },
          colorBackgroundTilesDisabled: {
            light: '{colorGrey200}',
            dark: '{colorGrey700}'
          },
          colorBackgroundToggleCheckedDisabled: {
            light: '{colorBlue300}',
            dark: '{colorBlue700}'
          },
          colorBackgroundToggleDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalActive: {
            light: '{colorBorderButtonNormalDefault}',
            dark: '{colorBorderButtonNormalDefault}'
          },
          colorBorderButtonNormalDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey500}'
          },
          colorBorderButtonNormalDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderButtonNormalHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey400}'
          },
          colorBorderButtonPrimaryDisabled: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderCalendarGrid: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderCalendarGridSelectedFocusRing: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderCodeEditorAceActiveLineLightTheme: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorBorderCodeEditorAceActiveLineDarkTheme: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorBorderCodeEditorPaneItemHover: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderContainerDivider: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderContainerTop: {
            light: '{colorGrey200}',
            dark: '{colorGrey700}'
          },
          colorBorderControlChecked: {
            light: '{colorBackgroundControlChecked}',
            dark: '{colorBackgroundControlChecked}'
          },
          colorBorderControlDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderControlDisabled: {
            light: '{colorBackgroundControlDisabled}',
            dark: '{colorBackgroundControlDisabled}'
          },
          colorBorderDividerActive: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderDividerDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorBorderDividerPanelBottom: {
            light: '{colorShadowSide}',
            dark: '{colorShadowSide}'
          },
          colorBorderDividerPanelSide: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDividerSecondary: {
            light: '{colorGrey200}',
            dark: '{colorGrey650}'
          },
          colorBorderDropdownContainer: {
            light: 'transparent',
            dark: 'transparent'
          },
          colorBorderDropdownGroup: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemDefault: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderDropdownItemHover: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorBorderDropdownItemDimmedHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderDropdownItemSelected: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderDropdownItemTop: {
            light: '{colorBorderDropdownItemDefault}',
            dark: '{colorBorderDropdownItemDefault}'
          },
          colorBorderEditableCellHover: {
            light: '{colorBorderDropdownItemHover}',
            dark: '{colorBorderDropdownItemHover}'
          },
          colorBorderInputDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderInputDisabled: {
            light: '{colorBackgroundInputDisabled}',
            dark: '{colorBackgroundInputDisabled}'
          },
          colorBorderInputFocused: {
            light: '{colorBorderItemFocused}',
            dark: '{colorBorderItemFocused}'
          },
          colorBorderItemFocused: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderDropdownItemFocused: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderItemPlaceholder: {
            light: '{colorTransparent}',
            dark: '{colorTransparent}'
          },
          colorBorderItemSelected: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderLayout: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorBorderNotificationStackBar: {
            light: '{colorGrey700}',
            dark: '{colorGrey700}'
          },
          colorBorderPanelHeader: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorBorderDividerDefault}'
          },
          colorBorderPopover: {
            light: '{colorGrey300}',
            dark: '{colorGrey600}'
          },
          colorBorderSegmentActive: {
            light: '{colorBorderSegmentHover}',
            dark: '{colorBorderSegmentHover}'
          },
          colorBorderSegmentDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorBorderSegmentDisabled: {
            light: '{colorBorderButtonNormalDisabled}',
            dark: '{colorBorderButtonNormalDisabled}'
          },
          colorBorderSegmentHover: {
            light: '{colorGrey900}',
            dark: '{colorWhite}'
          },
          colorBorderStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed600}'
          },
          colorBorderStatusInfo: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorBorderStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen600}'
          },
          colorBorderStatusWarning: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorBorderDividerInteractiveDefault: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorBorderTabsDivider: {
            light: '{colorGrey400}',
            dark: '{colorGrey650}'
          },
          colorBorderTabsShadow: {
            light: '{colorBorderDividerDefault}',
            dark: '{colorGreyTransparent}'
          },
          colorBorderTabsUnderline: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorBorderTilesDisabled: {
            light: '{colorTransparent}',
            dark: '{colorGrey650}'
          },
          colorBorderTutorial: {
            light: '{colorGrey400}',
            dark: '{colorGrey500}'
          },
          colorForegroundControlDefault: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorForegroundControlDisabled: {
            light: '{colorWhite}',
            dark: '{colorGrey550}'
          },
          colorShadowDefault: {
            light: '{colorGreyTransparentHeavy}',
            dark: '{colorGreyTransparentHeavy}'
          },
          colorShadowMedium: {
            light: '{colorGreyTransparent}',
            dark: '{colorGreyTransparent}'
          },
          colorShadowSide: {
            light: '{colorGreyTransparentLight}',
            dark: '{colorGreyTransparentLight}'
          },
          colorStrokeChartLine: {
            light: '{colorGrey500}',
            dark: '{colorGrey500}'
          },
          colorStrokeCodeEditorResizeHandler: {
            light: '{colorGrey550}',
            dark: '{colorGrey550}'
          },
          colorStrokeCodeEditorGutterActiveLineDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey650}'
          },
          colorStrokeCodeEditorGutterActiveLineHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey900}'
          },
          colorTextAccent: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextBodyDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextBodySecondary: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbCurrent: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextBreadcrumbIcon: {
            light: '{colorGrey550}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextButtonInlineIconDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextButtonInlineIconHover: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorTextButtonNormalActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextButtonNormalDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextButtonNormalHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextLinkButtonNormalDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextLinkButtonNormalHover: {
            light: '{colorTextButtonNormalHover}',
            dark: '{colorTextButtonNormalHover}'
          },
          colorTextLinkButtonNormalActive: {
            light: '{colorTextButtonNormalActive}',
            dark: '{colorTextButtonNormalActive}'
          },
          colorTextButtonPrimaryActive: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextButtonPrimaryHover: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextCalendarDateHover: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarDateSelected: {
            light: '{colorTextDropdownItemHighlighted}',
            dark: '{colorTextDropdownItemHighlighted}'
          },
          colorTextCalendarMonth: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextCodeEditorGutterActiveLine: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextCodeEditorGutterDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextCodeEditorStatusBarDisabled: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorTextCodeEditorTabButtonError: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextColumnHeader: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextColumnSortingIcon: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextControlDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextCounter: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextDisabled: {
            light: '{colorGrey400}',
            dark: '{colorGrey550}'
          },
          colorTextDisabledInlineEdit: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextDropdownFooter: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownGroupLabel: {
            light: '{colorTextGroupLabel}',
            dark: '{colorTextGroupLabel}'
          },
          colorTextDropdownItemDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextDropdownItemDimmed: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemDisabled: {
            light: '{colorTextInteractiveDisabled}',
            dark: '{colorTextInteractiveDisabled}'
          },
          colorTextDropdownItemFilterMatch: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextDropdownItemHighlighted: {
            light: '{colorGrey900}',
            dark: '{colorGrey200}'
          },
          colorTextDropdownItemSecondary: {
            light: '{colorTextFormSecondary}',
            dark: '{colorTextFormSecondary}'
          },
          colorTextDropdownItemSecondaryHover: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextEmpty: {
            light: '{colorGrey550}',
            dark: '{colorGrey300}'
          },
          colorTextExpandableSectionDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextExpandableSectionHover: {
            light: '{colorTextInteractiveHover}',
            dark: '{colorTextInteractiveHover}'
          },
          colorTextExpandableSectionNavigationIconDefault: {
            light: '{colorTextIconCaret}',
            dark: '{colorTextIconCaret}'
          },
          colorTextFormDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey300}'
          },
          colorTextFormLabel: {
            light: '{colorTextFormDefault}',
            dark: '{colorTextFormDefault}'
          },
          colorTextFormSecondary: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextGroupLabel: {
            light: '{colorTextLabel}',
            dark: '{colorTextLabel}'
          },
          colorTextLabelGenAi: {
            light: '{colorPurple600}',
            dark: '{colorPurple400}'
          },
          colorTextHeadingDefault: {
            light: '{colorGrey900}',
            dark: '{colorGrey200}'
          },
          colorTextHeadingSecondary: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextHomeHeaderDefault: {
            light: '{colorWhite}',
            dark: '{colorGrey200}'
          },
          colorTextHomeHeaderSecondary: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextIconCaret: {
            light: '{colorGrey500}',
            dark: '{colorGrey450}'
          },
          colorTextIconSubtle: {
            light: '{colorGrey550}',
            dark: '{colorGrey400}'
          },
          colorTextInputDisabled: {
            light: '{colorGrey500}',
            dark: '{colorGrey550}'
          },
          colorTextInputPlaceholder: {
            light: '{colorGrey550}',
            dark: '{colorGrey500}'
          },
          colorTextInputPlaceholderDisabled: {
            light: '{colorTextInputPlaceholder}',
            dark: '{colorTextInputPlaceholder}'
          },
          colorTextInteractiveActive: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveDefault: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveDisabled: {
            light: '{colorGrey400}',
            dark: '{colorGrey550}'
          },
          colorTextInteractiveHover: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorTextInteractiveInvertedDefault: {
            light: '{colorGrey300}',
            dark: '{colorGrey300}'
          },
          colorTextInteractiveInvertedHover: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextInverted: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextLabel: {
            light: '{colorGrey600}',
            dark: '{colorGrey450}'
          },
          colorTextLayoutToggle: {
            light: '{colorGrey600}',
            dark: '{colorGrey300}'
          },
          colorTextLayoutToggleActive: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorTextLayoutToggleHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorTextLayoutToggleSelected: {
            light: '{colorWhite}',
            dark: '{colorGrey900}'
          },
          colorTextLinkDefault: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextLinkHover: {
            light: '{colorBlue700}',
            dark: '{colorBlue300}'
          },
          colorTextLinkInvertedHover: {
            light: '{colorTextNotificationDefault}',
            dark: '{colorTextNotificationDefault}'
          },
          colorTextLinkButtonUnderline: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextLinkButtonUnderlineHover: {
            light: 'currentColor',
            dark: 'currentColor'
          },
          colorTextNotificationDefault: {
            light: '{colorGrey100}',
            dark: '{colorGrey100}'
          },
          colorTextNotificationStackBar: {
            light: '{colorWhite}',
            dark: '{colorWhite}'
          },
          colorTextNotificationYellow: {
            light: '{colorGrey900}',
            dark: '{colorGrey900}'
          },
          colorTextPaginationPageNumberActiveDisabled: {
            light: '{colorTextBodySecondary}',
            dark: '{colorTextBodySecondary}'
          },
          colorTextPaginationPageNumberDefault: {
            light: '{colorTextInteractiveDefault}',
            dark: '{colorTextInteractiveDefault}'
          },
          colorTextSegmentActive: {
            light: '{colorWhite}',
            dark: '{colorGrey800}'
          },
          colorTextSegmentDefault: {
            light: '{colorTextButtonNormalDefault}',
            dark: '{colorTextButtonNormalDefault}'
          },
          colorTextSegmentHover: {
            light: '{colorBlue600}',
            dark: '{colorBlue500}'
          },
          colorTextSmall: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextStatusError: {
            light: '{colorRed600}',
            dark: '{colorRed500}'
          },
          colorTextStatusInactive: {
            light: '{colorGrey550}',
            dark: '{colorGrey450}'
          },
          colorTextStatusInfo: {
            light: '{colorBlue600}',
            dark: '{colorBlue400}'
          },
          colorTextStatusSuccess: {
            light: '{colorGreen600}',
            dark: '{colorGreen500}'
          },
          colorTextStatusWarning: {
            light: '{colorYellow800}',
            dark: '{colorYellow700}'
          },
          colorTextTopNavigationTitle: {
            light: '{colorGrey900}',
            dark: '{colorGrey100}'
          },
          colorBoardPlaceholderActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorBoardPlaceholderHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDragPlaceholderActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorDragPlaceholderHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDropzoneBackgroundActive: {
            light: '{colorGrey300}',
            dark: '{colorGrey550}'
          },
          colorDropzoneBackgroundHover: {
            light: '{colorBlue300}',
            dark: '{colorBlue600}'
          },
          colorDropzoneTextActive: {
            light: '{colorGrey600}',
            dark: '{colorGrey900}'
          },
          colorDropzoneTextHover: {
            light: '{colorBlue900}',
            dark: '{colorWhite}'
          }
        }
      }
    },
    tokenModeMap: {
      colorChartsRed300: 'color',
      colorChartsRed400: 'color',
      colorChartsRed500: 'color',
      colorChartsRed600: 'color',
      colorChartsRed700: 'color',
      colorChartsRed800: 'color',
      colorChartsRed900: 'color',
      colorChartsRed1000: 'color',
      colorChartsRed1100: 'color',
      colorChartsRed1200: 'color',
      colorChartsOrange300: 'color',
      colorChartsOrange400: 'color',
      colorChartsOrange500: 'color',
      colorChartsOrange600: 'color',
      colorChartsOrange700: 'color',
      colorChartsOrange800: 'color',
      colorChartsOrange900: 'color',
      colorChartsOrange1000: 'color',
      colorChartsOrange1100: 'color',
      colorChartsOrange1200: 'color',
      colorChartsYellow300: 'color',
      colorChartsYellow400: 'color',
      colorChartsYellow500: 'color',
      colorChartsYellow600: 'color',
      colorChartsYellow700: 'color',
      colorChartsYellow800: 'color',
      colorChartsYellow900: 'color',
      colorChartsYellow1000: 'color',
      colorChartsYellow1100: 'color',
      colorChartsYellow1200: 'color',
      colorChartsGreen300: 'color',
      colorChartsGreen400: 'color',
      colorChartsGreen500: 'color',
      colorChartsGreen600: 'color',
      colorChartsGreen700: 'color',
      colorChartsGreen800: 'color',
      colorChartsGreen900: 'color',
      colorChartsGreen1000: 'color',
      colorChartsGreen1100: 'color',
      colorChartsGreen1200: 'color',
      colorChartsTeal300: 'color',
      colorChartsTeal400: 'color',
      colorChartsTeal500: 'color',
      colorChartsTeal600: 'color',
      colorChartsTeal700: 'color',
      colorChartsTeal800: 'color',
      colorChartsTeal900: 'color',
      colorChartsTeal1000: 'color',
      colorChartsTeal1100: 'color',
      colorChartsTeal1200: 'color',
      colorChartsBlue1300: 'color',
      colorChartsBlue1400: 'color',
      colorChartsBlue1500: 'color',
      colorChartsBlue1600: 'color',
      colorChartsBlue1700: 'color',
      colorChartsBlue1800: 'color',
      colorChartsBlue1900: 'color',
      colorChartsBlue11000: 'color',
      colorChartsBlue11100: 'color',
      colorChartsBlue11200: 'color',
      colorChartsBlue2300: 'color',
      colorChartsBlue2400: 'color',
      colorChartsBlue2500: 'color',
      colorChartsBlue2600: 'color',
      colorChartsBlue2700: 'color',
      colorChartsBlue2800: 'color',
      colorChartsBlue2900: 'color',
      colorChartsBlue21000: 'color',
      colorChartsBlue21100: 'color',
      colorChartsBlue21200: 'color',
      colorChartsPurple300: 'color',
      colorChartsPurple400: 'color',
      colorChartsPurple500: 'color',
      colorChartsPurple600: 'color',
      colorChartsPurple700: 'color',
      colorChartsPurple800: 'color',
      colorChartsPurple900: 'color',
      colorChartsPurple1000: 'color',
      colorChartsPurple1100: 'color',
      colorChartsPurple1200: 'color',
      colorChartsPink300: 'color',
      colorChartsPink400: 'color',
      colorChartsPink500: 'color',
      colorChartsPink600: 'color',
      colorChartsPink700: 'color',
      colorChartsPink800: 'color',
      colorChartsPink900: 'color',
      colorChartsPink1000: 'color',
      colorChartsPink1100: 'color',
      colorChartsPink1200: 'color',
      colorChartsStatusCritical: 'color',
      colorChartsStatusHigh: 'color',
      colorChartsStatusMedium: 'color',
      colorChartsStatusLow: 'color',
      colorChartsStatusPositive: 'color',
      colorChartsStatusInfo: 'color',
      colorChartsStatusNeutral: 'color',
      colorChartsThresholdNegative: 'color',
      colorChartsThresholdPositive: 'color',
      colorChartsThresholdInfo: 'color',
      colorChartsThresholdNeutral: 'color',
      colorChartsLineGrid: 'color',
      colorChartsLineTick: 'color',
      colorChartsLineAxis: 'color',
      colorChartsPaletteCategorical1: 'color',
      colorChartsPaletteCategorical2: 'color',
      colorChartsPaletteCategorical3: 'color',
      colorChartsPaletteCategorical4: 'color',
      colorChartsPaletteCategorical5: 'color',
      colorChartsPaletteCategorical6: 'color',
      colorChartsPaletteCategorical7: 'color',
      colorChartsPaletteCategorical8: 'color',
      colorChartsPaletteCategorical9: 'color',
      colorChartsPaletteCategorical10: 'color',
      colorChartsPaletteCategorical11: 'color',
      colorChartsPaletteCategorical12: 'color',
      colorChartsPaletteCategorical13: 'color',
      colorChartsPaletteCategorical14: 'color',
      colorChartsPaletteCategorical15: 'color',
      colorChartsPaletteCategorical16: 'color',
      colorChartsPaletteCategorical17: 'color',
      colorChartsPaletteCategorical18: 'color',
      colorChartsPaletteCategorical19: 'color',
      colorChartsPaletteCategorical20: 'color',
      colorChartsPaletteCategorical21: 'color',
      colorChartsPaletteCategorical22: 'color',
      colorChartsPaletteCategorical23: 'color',
      colorChartsPaletteCategorical24: 'color',
      colorChartsPaletteCategorical25: 'color',
      colorChartsPaletteCategorical26: 'color',
      colorChartsPaletteCategorical27: 'color',
      colorChartsPaletteCategorical28: 'color',
      colorChartsPaletteCategorical29: 'color',
      colorChartsPaletteCategorical30: 'color',
      colorChartsPaletteCategorical31: 'color',
      colorChartsPaletteCategorical32: 'color',
      colorChartsPaletteCategorical33: 'color',
      colorChartsPaletteCategorical34: 'color',
      colorChartsPaletteCategorical35: 'color',
      colorChartsPaletteCategorical36: 'color',
      colorChartsPaletteCategorical37: 'color',
      colorChartsPaletteCategorical38: 'color',
      colorChartsPaletteCategorical39: 'color',
      colorChartsPaletteCategorical40: 'color',
      colorChartsPaletteCategorical41: 'color',
      colorChartsPaletteCategorical42: 'color',
      colorChartsPaletteCategorical43: 'color',
      colorChartsPaletteCategorical44: 'color',
      colorChartsPaletteCategorical45: 'color',
      colorChartsPaletteCategorical46: 'color',
      colorChartsPaletteCategorical47: 'color',
      colorChartsPaletteCategorical48: 'color',
      colorChartsPaletteCategorical49: 'color',
      colorChartsPaletteCategorical50: 'color',
      colorGreyOpaque25: 'color',
      colorGreyOpaque40: 'color',
      colorGreyOpaque50: 'color',
      colorGreyOpaque70: 'color',
      colorGreyOpaque80: 'color',
      colorGreyOpaque90: 'color',
      colorGreyTransparent: 'color',
      colorGreyTransparentHeavy: 'color',
      colorGreyTransparentLight: 'color',
      colorBackgroundBadgeIcon: 'color',
      colorBackgroundButtonLinkActive: 'color',
      colorBackgroundButtonLinkHover: 'color',
      colorBackgroundButtonNormalActive: 'color',
      colorBackgroundButtonNormalDefault: 'color',
      colorBackgroundButtonNormalDisabled: 'color',
      colorBackgroundButtonNormalHover: 'color',
      colorBackgroundButtonPrimaryActive: 'color',
      colorBackgroundButtonPrimaryDefault: 'color',
      colorBackgroundButtonPrimaryDisabled: 'color',
      colorBackgroundButtonPrimaryHover: 'color',
      colorBackgroundCalendarCurrentDate: 'color',
      colorBackgroundCellShaded: 'color',
      colorBackgroundCodeEditorGutterActiveLineDefault: 'color',
      colorBackgroundCodeEditorGutterActiveLineError: 'color',
      colorBackgroundCodeEditorGutterDefault: 'color',
      colorBackgroundCodeEditorLoading: 'color',
      colorBackgroundCodeEditorPaneItemHover: 'color',
      colorBackgroundCodeEditorStatusBar: 'color',
      colorBackgroundContainerContent: 'color',
      colorBackgroundContainerHeader: 'color',
      colorBackgroundControlChecked: 'color',
      colorBackgroundControlDefault: 'color',
      colorBackgroundControlDisabled: 'color',
      colorBackgroundDropdownItemDefault: 'color',
      colorBackgroundDropdownItemDimmed: 'color',
      colorBackgroundDropdownItemFilterMatch: 'color',
      colorBackgroundDropdownItemHover: 'color',
      colorBackgroundDropdownItemSelected: 'color',
      colorBackgroundHomeHeader: 'color',
      colorBackgroundInputDefault: 'color',
      colorBackgroundInputDisabled: 'color',
      colorBackgroundItemSelected: 'color',
      colorBackgroundLayoutMain: 'color',
      colorBackgroundLayoutMobilePanel: 'color',
      colorBackgroundLayoutPanelContent: 'color',
      colorBackgroundLayoutPanelHover: 'color',
      colorBackgroundLayoutToggleActive: 'color',
      colorBackgroundLayoutToggleDefault: 'color',
      colorBackgroundLayoutToggleHover: 'color',
      colorBackgroundLayoutToggleSelectedActive: 'color',
      colorBackgroundLayoutToggleSelectedDefault: 'color',
      colorBackgroundLayoutToggleSelectedHover: 'color',
      colorBackgroundModalOverlay: 'color',
      colorBackgroundNotificationBlue: 'color',
      colorBackgroundNotificationGreen: 'color',
      colorBackgroundNotificationGrey: 'color',
      colorBackgroundNotificationRed: 'color',
      colorBackgroundNotificationYellow: 'color',
      colorBackgroundNotificationStackBar: 'color',
      colorBackgroundNotificationStackBarActive: 'color',
      colorBackgroundNotificationStackBarHover: 'color',
      colorBackgroundPopover: 'color',
      colorBackgroundProgressBarContentDefault: 'color',
      colorBackgroundProgressBarContentInFlash: 'color',
      colorBackgroundProgressBarLayoutDefault: 'color',
      colorBackgroundProgressBarLayoutInFlash: 'color',
      colorBackgroundSegmentActive: 'color',
      colorBackgroundSegmentDefault: 'color',
      colorBackgroundSegmentDisabled: 'color',
      colorBackgroundSegmentHover: 'color',
      colorBackgroundSliderHandleDefault: 'color',
      colorBackgroundSliderHandleActive: 'color',
      colorBackgroundSliderTrack: 'color',
      colorBackgroundSliderHandleRing: 'color',
      colorBackgroundSliderErrorPressed: 'color',
      colorBackgroundSliderWarningPressed: 'color',
      colorBackgroundStatusError: 'color',
      colorBackgroundStatusInfo: 'color',
      colorBackgroundStatusSuccess: 'color',
      colorBackgroundStatusWarning: 'color',
      colorBackgroundTableHeader: 'color',
      colorBackgroundTilesDisabled: 'color',
      colorBackgroundToggleCheckedDisabled: 'color',
      colorBackgroundToggleDefault: 'color',
      colorBorderButtonNormalActive: 'color',
      colorBorderButtonNormalDefault: 'color',
      colorBorderButtonNormalDisabled: 'color',
      colorBorderButtonNormalHover: 'color',
      colorBorderButtonPrimaryDisabled: 'color',
      colorBorderCalendarGrid: 'color',
      colorBorderCalendarGridSelectedFocusRing: 'color',
      colorBorderCodeEditorAceActiveLineLightTheme: 'color',
      colorBorderCodeEditorAceActiveLineDarkTheme: 'color',
      colorBorderCodeEditorDefault: 'color',
      colorBorderCodeEditorPaneItemHover: 'color',
      colorBorderContainerDivider: 'color',
      colorBorderContainerTop: 'color',
      colorBorderControlChecked: 'color',
      colorBorderControlDefault: 'color',
      colorBorderControlDisabled: 'color',
      colorBorderDividerActive: 'color',
      colorBorderDividerDefault: 'color',
      colorBorderDividerPanelBottom: 'color',
      colorBorderDividerPanelSide: 'color',
      colorBorderDividerSecondary: 'color',
      colorBorderDropdownContainer: 'color',
      colorBorderDropdownGroup: 'color',
      colorBorderDropdownItemDefault: 'color',
      colorBorderDropdownItemHover: 'color',
      colorBorderDropdownItemDimmedHover: 'color',
      colorBorderDropdownItemSelected: 'color',
      colorBorderDropdownItemTop: 'color',
      colorBorderEditableCellHover: 'color',
      colorBorderInputDefault: 'color',
      colorBorderInputDisabled: 'color',
      colorBorderInputFocused: 'color',
      colorBorderItemFocused: 'color',
      colorBorderDropdownItemFocused: 'color',
      colorBorderItemPlaceholder: 'color',
      colorBorderItemSelected: 'color',
      colorBorderLayout: 'color',
      colorBorderNotificationStackBar: 'color',
      colorBorderPanelHeader: 'color',
      colorBorderPopover: 'color',
      colorBorderSegmentActive: 'color',
      colorBorderSegmentDefault: 'color',
      colorBorderSegmentDisabled: 'color',
      colorBorderSegmentHover: 'color',
      colorBorderStatusError: 'color',
      colorBorderStatusInfo: 'color',
      colorBorderStatusSuccess: 'color',
      colorBorderStatusWarning: 'color',
      colorBorderDividerInteractiveDefault: 'color',
      colorBorderTabsDivider: 'color',
      colorBorderTabsShadow: 'color',
      colorBorderTabsUnderline: 'color',
      colorBorderTilesDisabled: 'color',
      colorBorderTutorial: 'color',
      colorForegroundControlDefault: 'color',
      colorForegroundControlDisabled: 'color',
      colorShadowDefault: 'color',
      colorShadowMedium: 'color',
      colorShadowSide: 'color',
      colorStrokeChartLine: 'color',
      colorStrokeCodeEditorResizeHandler: 'color',
      colorStrokeCodeEditorGutterActiveLineDefault: 'color',
      colorStrokeCodeEditorGutterActiveLineHover: 'color',
      colorTextAccent: 'color',
      colorTextBodyDefault: 'color',
      colorTextBodySecondary: 'color',
      colorTextBreadcrumbCurrent: 'color',
      colorTextBreadcrumbIcon: 'color',
      colorTextButtonInlineIconDefault: 'color',
      colorTextButtonInlineIconDisabled: 'color',
      colorTextButtonInlineIconHover: 'color',
      colorTextButtonNormalActive: 'color',
      colorTextButtonNormalDefault: 'color',
      colorTextButtonNormalHover: 'color',
      colorTextLinkButtonNormalDefault: 'color',
      colorTextLinkButtonNormalHover: 'color',
      colorTextLinkButtonNormalActive: 'color',
      colorTextButtonPrimaryActive: 'color',
      colorTextButtonPrimaryDefault: 'color',
      colorTextButtonPrimaryHover: 'color',
      colorTextCalendarDateHover: 'color',
      colorTextCalendarDateSelected: 'color',
      colorTextCalendarMonth: 'color',
      colorTextCodeEditorGutterActiveLine: 'color',
      colorTextCodeEditorGutterDefault: 'color',
      colorTextCodeEditorStatusBarDisabled: 'color',
      colorTextCodeEditorTabButtonError: 'color',
      colorTextColumnHeader: 'color',
      colorTextColumnSortingIcon: 'color',
      colorTextControlDisabled: 'color',
      colorTextCounter: 'color',
      colorTextDisabled: 'color',
      colorTextDisabledInlineEdit: 'color',
      colorTextDropdownFooter: 'color',
      colorTextDropdownGroupLabel: 'color',
      colorTextDropdownItemDefault: 'color',
      colorTextDropdownItemDimmed: 'color',
      colorTextDropdownItemDisabled: 'color',
      colorTextDropdownItemFilterMatch: 'color',
      colorTextDropdownItemHighlighted: 'color',
      colorTextDropdownItemSecondary: 'color',
      colorTextDropdownItemSecondaryHover: 'color',
      colorTextEmpty: 'color',
      colorTextExpandableSectionDefault: 'color',
      colorTextExpandableSectionHover: 'color',
      colorTextExpandableSectionNavigationIconDefault: 'color',
      colorTextFormDefault: 'color',
      colorTextFormLabel: 'color',
      colorTextFormSecondary: 'color',
      colorTextGroupLabel: 'color',
      colorTextLabelGenAi: 'color',
      colorTextHeadingDefault: 'color',
      colorTextHeadingSecondary: 'color',
      colorTextHomeHeaderDefault: 'color',
      colorTextHomeHeaderSecondary: 'color',
      colorTextIconCaret: 'color',
      colorTextIconSubtle: 'color',
      colorTextInputDisabled: 'color',
      colorTextInputPlaceholder: 'color',
      colorTextInputPlaceholderDisabled: 'color',
      colorTextInteractiveActive: 'color',
      colorTextInteractiveDefault: 'color',
      colorTextInteractiveDisabled: 'color',
      colorTextInteractiveHover: 'color',
      colorTextInteractiveInvertedDefault: 'color',
      colorTextInteractiveInvertedHover: 'color',
      colorTextInverted: 'color',
      colorTextLabel: 'color',
      colorTextLayoutToggle: 'color',
      colorTextLayoutToggleActive: 'color',
      colorTextLayoutToggleHover: 'color',
      colorTextLayoutToggleSelected: 'color',
      colorTextLinkDefault: 'color',
      colorTextLinkHover: 'color',
      colorTextLinkInvertedHover: 'color',
      colorTextLinkButtonUnderline: 'color',
      colorTextLinkButtonUnderlineHover: 'color',
      colorTextNotificationDefault: 'color',
      colorTextNotificationStackBar: 'color',
      colorTextNotificationYellow: 'color',
      colorTextPaginationPageNumberActiveDisabled: 'color',
      colorTextPaginationPageNumberDefault: 'color',
      colorTextSegmentActive: 'color',
      colorTextSegmentDefault: 'color',
      colorTextSegmentHover: 'color',
      colorTextSmall: 'color',
      colorTextStatusError: 'color',
      colorTextStatusInactive: 'color',
      colorTextStatusInfo: 'color',
      colorTextStatusSuccess: 'color',
      colorTextStatusWarning: 'color',
      colorTextTopNavigationTitle: 'color',
      colorBoardPlaceholderActive: 'color',
      colorBoardPlaceholderHover: 'color',
      colorDragPlaceholderActive: 'color',
      colorDragPlaceholderHover: 'color',
      colorDropzoneBackgroundActive: 'color',
      colorDropzoneBackgroundHover: 'color',
      colorDropzoneTextActive: 'color',
      colorDropzoneTextHover: 'color',
      motionDurationExtraFast: 'motion',
      motionDurationExtraSlow: 'motion',
      motionDurationFast: 'motion',
      motionDurationModerate: 'motion',
      motionDurationRefreshOnlyAmbient: 'motion',
      motionDurationRefreshOnlyFast: 'motion',
      motionDurationRefreshOnlyMedium: 'motion',
      motionDurationRefreshOnlySlow: 'motion',
      motionDurationRotate180: 'motion',
      motionDurationRotate90: 'motion',
      motionDurationShowPaced: 'motion',
      motionDurationShowQuick: 'motion',
      motionDurationSlow: 'motion',
      motionDurationTransitionQuick: 'motion',
      motionDurationTransitionShowPaced: 'motion',
      motionDurationTransitionShowQuick: 'motion',
      motionEasingEaseOutQuart: 'motion',
      motionEasingRefreshOnlyA: 'motion',
      motionEasingRefreshOnlyB: 'motion',
      motionEasingRefreshOnlyC: 'motion',
      motionEasingRefreshOnlyD: 'motion',
      motionEasingRotate180: 'motion',
      motionEasingRotate90: 'motion',
      motionEasingShowPaced: 'motion',
      motionEasingShowQuick: 'motion',
      motionEasingTransitionQuick: 'motion',
      motionEasingTransitionShowPaced: 'motion',
      motionEasingTransitionShowQuick: 'motion',
      motionEasingResponsive: 'motion',
      motionEasingSticky: 'motion',
      motionEasingExpressive: 'motion',
      motionDurationResponsive: 'motion',
      motionDurationExpressive: 'motion',
      motionDurationComplex: 'motion',
      motionKeyframesFadeIn: 'motion',
      motionKeyframesFadeOut: 'motion',
      motionKeyframesStatusIconError: 'motion',
      motionKeyframesScalePopup: 'motion',
      sizeCalendarGridWidth: 'density',
      sizeControl: 'density',
      sizeIconBig: 'density',
      sizeIconLarge: 'density',
      sizeIconMedium: 'density',
      sizeIconNormal: 'density',
      sizeTableSelectionHorizontal: 'density',
      sizeVerticalInput: 'density',
      sizeVerticalPanelIconOffset: 'density',
      spaceAlertActionLeft: 'density',
      spaceAlertHorizontal: 'density',
      spaceAlertMessageRight: 'density',
      spaceAlertVertical: 'density',
      spaceButtonFocusOutlineGutter: 'density',
      spaceButtonHorizontal: 'density',
      spaceButtonIconFocusOutlineGutterVertical: 'density',
      spaceButtonIconOnlyHorizontal: 'density',
      spaceButtonInlineIconFocusOutlineGutter: 'density',
      spaceButtonModalDismissVertical: 'density',
      spaceCalendarGridFocusOutlineGutter: 'density',
      spaceCalendarGridSelectedFocusOutlineGutter: 'density',
      spaceCalendarGridGutter: 'density',
      spaceCardHorizontal: 'density',
      spaceCardVertical: 'density',
      spaceCodeEditorStatusFocusOutlineGutter: 'density',
      spaceContainerContentTop: 'density',
      spaceContainerHeaderTop: 'density',
      spaceContainerHeaderBottom: 'density',
      spaceContainerHorizontal: 'density',
      spaceContentHeaderPaddingBottom: 'density',
      spaceDarkHeaderOverlapDistance: 'density',
      spaceExpandableSectionIconOffsetTop: 'density',
      spaceFieldHorizontal: 'density',
      spaceFieldIconOffset: 'density',
      spaceFilteringTokenDismissButtonFocusOutlineGutter: 'density',
      spaceFilteringTokenOperationSelectFocusOutlineGutter: 'density',
      spaceFlashbarActionLeft: 'density',
      spaceFlashbarDismissRight: 'density',
      spaceFlashbarHorizontal: 'density',
      spaceGridGutter: 'density',
      spaceKeyValueGap: 'density',
      spaceLayoutContentBottom: 'density',
      spaceLayoutContentHorizontal: 'density',
      spaceLayoutToggleDiameter: 'density',
      spaceLayoutTogglePadding: 'density',
      spaceModalContentBottom: 'density',
      spaceModalHorizontal: 'density',
      spaceOptionIconBigTop: 'density',
      spacePanelContentBottom: 'density',
      spacePanelContentTop: 'density',
      spacePanelDividerMarginHorizontal: 'density',
      spacePanelHeaderVertical: 'density',
      spacePanelNavLeft: 'density',
      spacePanelSideLeft: 'density',
      spacePanelSideRight: 'density',
      spacePanelSplitTop: 'density',
      spacePanelSplitBottom: 'density',
      spaceSegmentedControlFocusOutlineGutter: 'density',
      spaceTabsContentTop: 'density',
      spaceTabsFocusOutlineGutter: 'density',
      spaceTableContentBottom: 'density',
      spaceTableEmbeddedHeaderTop: 'density',
      spaceTableFooterHorizontal: 'density',
      spaceTableHeaderFocusOutlineGutter: 'density',
      spaceTableHeaderHorizontal: 'density',
      spaceTableHeaderToolsBottom: 'density',
      spaceTableHeaderToolsFullPageBottom: 'density',
      spaceTableHorizontal: 'density',
      spaceScaled2xNone: 'density',
      spaceScaled2xXxxs: 'density',
      spaceScaled2xXxs: 'density',
      spaceScaled2xXs: 'density',
      spaceScaled2xS: 'density',
      spaceScaled2xM: 'density',
      spaceScaled2xL: 'density',
      spaceScaled2xXl: 'density',
      spaceScaled2xXxl: 'density',
      spaceScaled2xXxxl: 'density',
      spaceScaledNone: 'density',
      spaceScaledXxxs: 'density',
      spaceScaledXxs: 'density',
      spaceScaledXs: 'density',
      spaceScaledS: 'density',
      spaceScaledM: 'density',
      spaceScaledL: 'density',
      spaceScaledXl: 'density',
      spaceScaledXxl: 'density',
      spaceScaledXxxl: 'density',
      spaceStaticXxxs: 'density',
      spaceStaticXxs: 'density',
      spaceStaticXs: 'density',
      spaceStaticS: 'density',
      spaceStaticM: 'density',
      spaceStaticL: 'density',
      spaceStaticXl: 'density',
      spaceStaticXxl: 'density',
      spaceStaticXxxl: 'density',
      spaceNone: 'density',
      spaceXxxs: 'density',
      spaceXxs: 'density',
      spaceXs: 'density',
      spaceS: 'density',
      spaceM: 'density',
      spaceL: 'density',
      spaceXl: 'density',
      spaceXxl: 'density',
      spaceXxxl: 'density',
      shadowContainer: 'color',
      shadowContainerStacked: 'color',
      shadowContainerActive: 'color',
      shadowDropdown: 'color',
      shadowDropup: 'color',
      shadowFlashCollapsed: 'color',
      shadowFlashSticky: 'color',
      shadowModal: 'color',
      shadowPanel: 'color',
      shadowPanelToggle: 'color',
      shadowPopover: 'color',
      shadowSplitBottom: 'color',
      shadowSplitSide: 'color',
      shadowSticky: 'color',
      shadowStickyEmbedded: 'color',
      shadowStickyColumnFirst: 'color',
      shadowStickyColumnLast: 'color'
    }
  },
  secondary: [
    {
      id: 'visual-refresh',
      selector: '.awsui-visual-refresh',
      modes: {
        color: {
          id: 'color',
          states: {
            light: {
              default: true
            },
            dark: {
              selector: '.awsui-dark-mode',
              media: 'not print'
            }
          }
        },
        density: {
          id: 'density',
          states: {
            comfortable: {
              default: true
            },
            compact: {
              selector: '.awsui-compact-mode'
            }
          }
        },
        motion: {
          id: 'motion',
          states: {
            default: {
              default: true
            },
            disabled: {
              selector: '.awsui-motion-disabled'
            }
          }
        }
      },
      tokens: {
        colorAmazonOrange: '#ff9900',
        colorAwsSquidInk: '#232f3e',
        colorBlack: '#000000',
        colorBlue100: '#f2f8fd',
        colorBlue200: '#d3e7f9',
        colorBlue300: '#b5d6f4',
        colorBlue400: '#89bdee',
        colorBlue500: '#539fe5',
        colorBlue600: '#0972d3',
        colorBlue700: '#065299',
        colorBlue800: '#033160',
        colorBlue900: '#00142b',
        colorBlueOpaque: 'rgba(51, 136, 221, 0.5)',
        colorGreen100: '#f2fcf3',
        colorGreen500: '#29ad32',
        colorGreen600: '#037f0c',
        colorGreen700: '#1a520f',
        colorGreen900: '#001a02',
        colorGrey100: '#fbfbfb',
        colorGrey125: '#f8f8f8',
        colorGrey150: '#f4f4f4',
        colorGrey200: '#e9ebed',
        colorGrey300: '#d1d5db',
        colorGrey350: '#b6bec9',
        colorGrey400: '#9ba7b6',
        colorGrey450: '#8d99a8',
        colorGrey500: '#7d8998',
        colorGrey550: '#5f6b7a',
        colorGrey600: '#414d5c',
        colorGrey650: '#354150',
        colorGrey700: '#232f3e',
        colorGrey750: '#192534',
        colorGrey800: '#0f1b2a',
        colorGrey850: '#081120',
        colorGrey900: '#000716',
        colorGrey950: '#222222',
        colorOrange100: '#fef6f0',
        colorOrange500: '#ec7211',
        colorOrange600: '#eb5f07',
        colorOrange700: '#dd6b10',
        colorPurple400: '#bf80ff',
        colorPurple600: '#7300e5',
        colorRed100: '#fff7f7',
        colorRed500: '#eb6f6f',
        colorRed600: '#d91515',
        colorRed700: '#7c2718',
        colorRed900: '#1a0000',
        colorTransparent: 'transparent',
        colorWhite: '#ffffff',
        colorYellow100: '#fffce9',
        colorYellow600: '#ffe457',
        colorYellow700: '#e0ca57',
        colorYellow800: '#8d6605',
        colorYellow900: '#1d1906',
        colorChartsRed300: {
          light: '#ea7158',
          dark: '#d63f38'
        },
        colorChartsRed400: {
          light: '#dc5032',
          dark: '#ed5958'
        },
        colorChartsRed500: {
          light: '#d13313',
          dark: '#fe6e73'
        },
        colorChartsRed600: {
          light: '#ba2e0f',
          dark: '#ff8a8a'
        },
        colorChartsRed700: {
          light: '#a82a0c',
          dark: '#ffa09e'
        },
        colorChartsRed800: {
          light: '#972709',
          dark: '#ffb3b0'
        },
        colorChartsRed900: {
          light: '#892407',
          dark: '#ffc4c0'
        },
        colorChartsRed1000: {
          light: '#7d2105',
          dark: '#ffd2cf'
        },
        colorChartsRed1100: {
          light: '#721e03',
          dark: '#ffe0dd'
        },
        colorChartsRed1200: {
          light: '#671c00',
          dark: '#ffecea'
        },
        colorChartsOrange300: {
          light: '#e07941',
          dark: '#c55305'
        },
        colorChartsOrange400: {
          light: '#cc5f21',
          dark: '#de6923'
        },
        colorChartsOrange500: {
          light: '#bc4d01',
          dark: '#f27c36'
        },
        colorChartsOrange600: {
          light: '#a84401',
          dark: '#f89256'
        },
        colorChartsOrange700: {
          light: '#983c02',
          dark: '#fca572'
        },
        colorChartsOrange800: {
          light: '#8a3603',
          dark: '#ffb68b'
        },
        colorChartsOrange900: {
          light: '#7e3103',
          dark: '#ffc6a4'
        },
        colorChartsOrange1000: {
          light: '#732c02',
          dark: '#ffd4bb'
        },
        colorChartsOrange1100: {
          light: '#692801',
          dark: '#ffe1cf'
        },
        colorChartsOrange1200: {
          light: '#602400',
          dark: '#ffede2'
        },
        colorChartsYellow300: {
          light: '#b2911c',
          dark: '#977001'
        },
        colorChartsYellow400: {
          light: '#9c7b0b',
          dark: '#b08400'
        },
        colorChartsYellow500: {
          light: '#8a6b05',
          dark: '#c59600'
        },
        colorChartsYellow600: {
          light: '#7b5f04',
          dark: '#d3a61c'
        },
        colorChartsYellow700: {
          light: '#6f5504',
          dark: '#dfb52c'
        },
        colorChartsYellow800: {
          light: '#654d03',
          dark: '#eac33a'
        },
        colorChartsYellow900: {
          light: '#5d4503',
          dark: '#f1cf65'
        },
        colorChartsYellow1000: {
          light: '#553f03',
          dark: '#f7db8a'
        },
        colorChartsYellow1100: {
          light: '#4d3901',
          dark: '#fce5a8'
        },
        colorChartsYellow1200: {
          light: '#483300',
          dark: '#ffefc9'
        },
        colorChartsGreen300: {
          light: '#67a353',
          dark: '#48851a'
        },
        colorChartsGreen400: {
          light: '#41902c',
          dark: '#5a9b29'
        },
        colorChartsGreen500: {
          light: '#1f8104',
          dark: '#69ae34'
        },
        colorChartsGreen600: {
          light: '#1a7302',
          dark: '#7dbd4c'
        },
        colorChartsGreen700: {
          light: '#176702',
          dark: '#8fca61'
        },
        colorChartsGreen800: {
          light: '#145d02',
          dark: '#9fd673'
        },
        colorChartsGreen900: {
          light: '#125502',
          dark: '#b2df8d'
        },
        colorChartsGreen1000: {
          light: '#104d01',
          dark: '#c5e7a8'
        },
        colorChartsGreen1100: {
          light: '#0f4601',
          dark: '#d5efbe'
        },
        colorChartsGreen1200: {
          light: '#0d4000',
          dark: '#e4f7d5'
        },
        colorChartsTeal300: {
          light: '#2ea597',
          dark: '#018977'
        },
        colorChartsTeal400: {
          light: '#1c8e81',
          dark: '#009d89'
        },
        colorChartsTeal500: {
          light: '#0d7d70',
          dark: '#00b09b'
        },
        colorChartsTeal600: {
          light: '#096f64',
          dark: '#40bfa9'
        },
        colorChartsTeal700: {
          light: '#06645a',
          dark: '#5fccb7'
        },
        colorChartsTeal800: {
          light: '#045b52',
          dark: '#77d7c3'
        },
        colorChartsTeal900: {
          light: '#03524a',
          dark: '#94e0d0'
        },
        colorChartsTeal1000: {
          light: '#014b44',
          dark: '#ace9db'
        },
        colorChartsTeal1100: {
          light: '#01443e',
          dark: '#c2f0e6'
        },
        colorChartsTeal1200: {
          light: '#003e38',
          dark: '#d7f7f0'
        },
        colorChartsBlue1300: {
          light: '#529ccb',
          dark: '#00819c'
        },
        colorChartsBlue1400: {
          light: '#3184c2',
          dark: '#0497ba'
        },
        colorChartsBlue1500: {
          light: '#0273bb',
          dark: '#08aad2'
        },
        colorChartsBlue1600: {
          light: '#0166ab',
          dark: '#44b9dd'
        },
        colorChartsBlue1700: {
          light: '#015b9d',
          dark: '#63c6e7'
        },
        colorChartsBlue1800: {
          light: '#015292',
          dark: '#79d2f0'
        },
        colorChartsBlue1900: {
          light: '#014a87',
          dark: '#98dcf5'
        },
        colorChartsBlue11000: {
          light: '#01437d',
          dark: '#b3e4f8'
        },
        colorChartsBlue11100: {
          light: '#003c75',
          dark: '#caedfc'
        },
        colorChartsBlue11200: {
          light: '#00366d',
          dark: '#ddf4ff'
        },
        colorChartsBlue2300: {
          light: '#688ae8',
          dark: '#486de8'
        },
        colorChartsBlue2400: {
          light: '#5978e3',
          dark: '#6384f5'
        },
        colorChartsBlue2500: {
          light: '#4066df',
          dark: '#7698fe'
        },
        colorChartsBlue2600: {
          light: '#3759ce',
          dark: '#8ea9ff'
        },
        colorChartsBlue2700: {
          light: '#314fbf',
          dark: '#a2b8ff'
        },
        colorChartsBlue2800: {
          light: '#2c46b1',
          dark: '#b1c5ff'
        },
        colorChartsBlue2900: {
          light: '#273ea5',
          dark: '#c3d1ff'
        },
        colorChartsBlue21000: {
          light: '#23379b',
          dark: '#d2dcff'
        },
        colorChartsBlue21100: {
          light: '#1f3191',
          dark: '#dfe6ff'
        },
        colorChartsBlue21200: {
          light: '#1b2b88',
          dark: '#ecf0ff'
        },
        colorChartsPurple300: {
          light: '#a783e1',
          dark: '#8d59de'
        },
        colorChartsPurple400: {
          light: '#9469d6',
          dark: '#a173ea'
        },
        colorChartsPurple500: {
          light: '#8456ce',
          dark: '#b088f5'
        },
        colorChartsPurple600: {
          light: '#7749bf',
          dark: '#bf9bf9'
        },
        colorChartsPurple700: {
          light: '#6b40b2',
          dark: '#cbabfc'
        },
        colorChartsPurple800: {
          light: '#6237a7',
          dark: '#d6baff'
        },
        colorChartsPurple900: {
          light: '#59309d',
          dark: '#dfc8ff'
        },
        colorChartsPurple1000: {
          light: '#512994',
          dark: '#e8d5ff'
        },
        colorChartsPurple1100: {
          light: '#4a238b',
          dark: '#efe2ff'
        },
        colorChartsPurple1200: {
          light: '#431d84',
          dark: '#f5edff'
        },
        colorChartsPink300: {
          light: '#da7596',
          dark: '#c64a70'
        },
        colorChartsPink400: {
          light: '#ce567c',
          dark: '#d56889'
        },
        colorChartsPink500: {
          light: '#c33d69',
          dark: '#e07f9d'
        },
        colorChartsPink600: {
          light: '#b1325c',
          dark: '#eb92ad'
        },
        colorChartsPink700: {
          light: '#a32952',
          dark: '#f5a2bb'
        },
        colorChartsPink800: {
          light: '#962249',
          dark: '#ffb0c8'
        },
        colorChartsPink900: {
          light: '#8b1b42',
          dark: '#ffc1d4'
        },
        colorChartsPink1000: {
          light: '#81143b',
          dark: '#ffd1de'
        },
        colorChartsPink1100: {
          light: '#780d35',
          dark: '#ffdfe8'
        },
        colorChartsPink1200: {
          light: '#6f062f',
          dark: '#ffecf1'
        },
        colorChartsStatusCritical: {
          light: '{colorChartsRed1000}',
          dark: '{colorChartsRed300}'
        },
        colorChartsStatusHigh: {
          light: '{colorChartsRed600}',
          dark: '{colorChartsRed500}'
        },
        colorChartsStatusMedium: {
          light: '{colorChartsOrange400}',
          dark: '{colorChartsOrange600}'
        },
        colorChartsStatusLow: {
          light: '{colorChartsYellow300}',
          dark: '{colorChartsYellow700}'
        },
        colorChartsStatusPositive: {
          light: '{colorChartsGreen300}',
          dark: '{colorChartsGreen500}'
        },
        colorChartsStatusInfo: {
          light: '{colorChartsBlue1400}',
          dark: '{colorChartsBlue1500}'
        },
        colorChartsStatusNeutral: {
          light: '{colorGrey500}',
          dark: '{colorGrey500}'
        },
        colorChartsThresholdNegative: {
          light: '{colorRed600}',
          dark: '{colorRed500}'
        },
        colorChartsThresholdPositive: {
          light: '{colorGreen600}',
          dark: '{colorGreen500}'
        },
        colorChartsThresholdInfo: {
          light: '{colorBlue600}',
          dark: '{colorBlue400}'
        },
        colorChartsThresholdNeutral: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorChartsLineGrid: {
          light: '{colorGrey300}',
          dark: '{colorGrey600}'
        },
        colorChartsLineTick: {
          light: '{colorGrey300}',
          dark: '{colorGrey600}'
        },
        colorChartsLineAxis: {
          light: '{colorGrey300}',
          dark: '{colorGrey600}'
        },
        colorChartsPaletteCategorical1: {
          light: '{colorChartsBlue2300}',
          dark: '{colorChartsBlue2300}'
        },
        colorChartsPaletteCategorical2: {
          light: '{colorChartsPink500}',
          dark: '{colorChartsPink500}'
        },
        colorChartsPaletteCategorical3: {
          light: '{colorChartsTeal300}',
          dark: '{colorChartsTeal300}'
        },
        colorChartsPaletteCategorical4: {
          light: '{colorChartsPurple500}',
          dark: '{colorChartsPurple500}'
        },
        colorChartsPaletteCategorical5: {
          light: '{colorChartsOrange300}',
          dark: '{colorChartsOrange300}'
        },
        colorChartsPaletteCategorical6: {
          light: '{colorChartsBlue2600}',
          dark: '{colorChartsBlue2600}'
        },
        colorChartsPaletteCategorical7: {
          light: '{colorChartsPink800}',
          dark: '{colorChartsPink800}'
        },
        colorChartsPaletteCategorical8: {
          light: '{colorChartsTeal600}',
          dark: '{colorChartsTeal600}'
        },
        colorChartsPaletteCategorical9: {
          light: '{colorChartsPurple800}',
          dark: '{colorChartsPurple800}'
        },
        colorChartsPaletteCategorical10: {
          light: '{colorChartsOrange600}',
          dark: '{colorChartsOrange600}'
        },
        colorChartsPaletteCategorical11: {
          light: '{colorChartsBlue2900}',
          dark: '{colorChartsBlue2900}'
        },
        colorChartsPaletteCategorical12: {
          light: '{colorChartsPink1100}',
          dark: '{colorChartsPink1100}'
        },
        colorChartsPaletteCategorical13: {
          light: '{colorChartsTeal900}',
          dark: '{colorChartsTeal900}'
        },
        colorChartsPaletteCategorical14: {
          light: '{colorChartsPurple1100}',
          dark: '{colorChartsPurple1100}'
        },
        colorChartsPaletteCategorical15: {
          light: '{colorChartsOrange900}',
          dark: '{colorChartsOrange900}'
        },
        colorChartsPaletteCategorical16: {
          light: '{colorChartsBlue21200}',
          dark: '{colorChartsBlue21200}'
        },
        colorChartsPaletteCategorical17: {
          light: '{colorChartsPink400}',
          dark: '{colorChartsPink400}'
        },
        colorChartsPaletteCategorical18: {
          light: '{colorChartsTeal1200}',
          dark: '{colorChartsTeal1200}'
        },
        colorChartsPaletteCategorical19: {
          light: '{colorChartsPurple400}',
          dark: '{colorChartsPurple400}'
        },
        colorChartsPaletteCategorical20: {
          light: '{colorChartsOrange1200}',
          dark: '{colorChartsOrange1200}'
        },
        colorChartsPaletteCategorical21: {
          light: '{colorChartsBlue2500}',
          dark: '{colorChartsBlue2500}'
        },
        colorChartsPaletteCategorical22: {
          light: '{colorChartsPink700}',
          dark: '{colorChartsPink700}'
        },
        colorChartsPaletteCategorical23: {
          light: '{colorChartsTeal500}',
          dark: '{colorChartsTeal500}'
        },
        colorChartsPaletteCategorical24: {
          light: '{colorChartsPurple700}',
          dark: '{colorChartsPurple700}'
        },
        colorChartsPaletteCategorical25: {
          light: '{colorChartsOrange500}',
          dark: '{colorChartsOrange500}'
        },
        colorChartsPaletteCategorical26: {
          light: '{colorChartsBlue2800}',
          dark: '{colorChartsBlue2800}'
        },
        colorChartsPaletteCategorical27: {
          light: '{colorChartsPink1000}',
          dark: '{colorChartsPink1000}'
        },
        colorChartsPaletteCategorical28: {
          light: '{colorChartsTeal800}',
          dark: '{colorChartsTeal800}'
        },
        colorChartsPaletteCategorical29: {
          light: '{colorChartsPurple1000}',
          dark: '{colorChartsPurple1000}'
        },
        colorChartsPaletteCategorical30: {
          light: '{colorChartsOrange800}',
          dark: '{colorChartsOrange800}'
        },
        colorChartsPaletteCategorical31: {
          light: '{colorChartsBlue21100}',
          dark: '{colorChartsBlue21100}'
        },
        colorChartsPaletteCategorical32: {
          light: '{colorChartsPink300}',
          dark: '{colorChartsPink300}'
        },
        colorChartsPaletteCategorical33: {
          light: '{colorChartsTeal1100}',
          dark: '{colorChartsTeal1100}'
        },
        colorChartsPaletteCategorical34: {
          light: '{colorChartsPurple300}',
          dark: '{colorChartsPurple300}'
        },
        colorChartsPaletteCategorical35: {
          light: '{colorChartsOrange1100}',
          dark: '{colorChartsOrange1100}'
        },
        colorChartsPaletteCategorical36: {
          light: '{colorChartsBlue2400}',
          dark: '{colorChartsBlue2400}'
        },
        colorChartsPaletteCategorical37: {
          light: '{colorChartsPink600}',
          dark: '{colorChartsPink600}'
        },
        colorChartsPaletteCategorical38: {
          light: '{colorChartsTeal400}',
          dark: '{colorChartsTeal400}'
        },
        colorChartsPaletteCategorical39: {
          light: '{colorChartsPurple600}',
          dark: '{colorChartsPurple600}'
        },
        colorChartsPaletteCategorical40: {
          light: '{colorChartsOrange400}',
          dark: '{colorChartsOrange400}'
        },
        colorChartsPaletteCategorical41: {
          light: '{colorChartsBlue2700}',
          dark: '{colorChartsBlue2700}'
        },
        colorChartsPaletteCategorical42: {
          light: '{colorChartsPink900}',
          dark: '{colorChartsPink900}'
        },
        colorChartsPaletteCategorical43: {
          light: '{colorChartsTeal700}',
          dark: '{colorChartsTeal700}'
        },
        colorChartsPaletteCategorical44: {
          light: '{colorChartsPurple900}',
          dark: '{colorChartsPurple900}'
        },
        colorChartsPaletteCategorical45: {
          light: '{colorChartsOrange700}',
          dark: '{colorChartsOrange700}'
        },
        colorChartsPaletteCategorical46: {
          light: '{colorChartsBlue21000}',
          dark: '{colorChartsBlue21000}'
        },
        colorChartsPaletteCategorical47: {
          light: '{colorChartsPink1200}',
          dark: '{colorChartsPink1200}'
        },
        colorChartsPaletteCategorical48: {
          light: '{colorChartsTeal1000}',
          dark: '{colorChartsTeal1000}'
        },
        colorChartsPaletteCategorical49: {
          light: '{colorChartsPurple1200}',
          dark: '{colorChartsPurple1200}'
        },
        colorChartsPaletteCategorical50: {
          light: '{colorChartsOrange1000}',
          dark: '{colorChartsOrange1000}'
        },
        colorGreyOpaque25: {
          light: 'rgba(255, 255, 255, 0.25)',
          dark: 'rgba(255, 255, 255, 0.25)'
        },
        colorGreyOpaque40: {
          light: 'rgba(0, 0, 0, 0.4)',
          dark: 'rgba(0, 0, 0, 0.4)'
        },
        colorGreyOpaque50: {
          light: 'rgba(0, 0, 0, 0.5)',
          dark: 'rgba(0, 0, 0, 0.5)'
        },
        colorGreyOpaque70: {
          light: 'rgba(35, 47, 62, 0.7)',
          dark: 'rgba(0, 7, 22, 0.7)'
        },
        colorGreyOpaque80: {
          light: 'rgba(22, 25, 31, 0.8)',
          dark: 'rgba(22, 25, 31, 0.8)'
        },
        colorGreyOpaque90: {
          light: 'rgba(242, 243, 243, 0.9)',
          dark: 'rgba(242, 243, 243, 0.9)'
        },
        colorGreyTransparent: {
          light: 'rgba(0, 7, 22, 0.12)',
          dark: 'rgba(0, 7, 22, 1)'
        },
        colorGreyTransparentHeavy: {
          light: 'rgba(0, 7, 22, 0.12)',
          dark: 'rgba(0, 7, 22, 1)'
        },
        colorGreyTransparentLight: {
          light: 'rgba(0, 7, 22, 0.12)',
          dark: 'rgba(0, 7, 22, 1)'
        },
        colorBackgroundBadgeIcon: {
          light: '{colorRed600}',
          dark: '{colorRed500}'
        },
        colorBackgroundButtonLinkActive: {
          light: '{colorBlue200}',
          dark: '{colorGrey650}'
        },
        colorBackgroundButtonLinkHover: {
          light: '{colorBlue100}',
          dark: '{colorGrey750}'
        },
        colorBackgroundButtonNormalActive: {
          light: '{colorBlue200}',
          dark: '{colorGrey650}'
        },
        colorBackgroundButtonNormalDefault: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundButtonNormalDisabled: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundButtonNormalHover: {
          light: '{colorBlue100}',
          dark: '{colorGrey750}'
        },
        colorBackgroundButtonPrimaryActive: {
          light: '{colorBlue800}',
          dark: '{colorBlue500}'
        },
        colorBackgroundButtonPrimaryDefault: {
          light: '{colorBorderButtonNormalDefault}',
          dark: '{colorBorderButtonNormalDefault}'
        },
        colorBackgroundButtonPrimaryDisabled: {
          light: '{colorGrey200}',
          dark: '{colorGrey650}'
        },
        colorBackgroundButtonPrimaryHover: {
          light: '{colorBorderButtonNormalHover}',
          dark: '{colorBorderButtonNormalHover}'
        },
        colorBackgroundCalendarCurrentDate: {
          light: '{colorGrey150}',
          dark: '{colorGrey650}'
        },
        colorBackgroundCellShaded: {
          light: '{colorGrey125}',
          dark: '{colorGrey750}'
        },
        colorBackgroundCodeEditorGutterActiveLineDefault: {
          light: '{colorGrey550}',
          dark: '{colorGrey500}'
        },
        colorBackgroundCodeEditorGutterActiveLineError: {
          light: '{colorTextStatusError}',
          dark: '{colorTextStatusError}'
        },
        colorBackgroundCodeEditorGutterDefault: {
          light: '{colorGrey150}',
          dark: '{colorGrey750}'
        },
        colorBackgroundCodeEditorLoading: {
          light: '{colorGrey100}',
          dark: '{colorGrey750}'
        },
        colorBackgroundCodeEditorPaneItemHover: {
          light: '{colorGrey200}',
          dark: '{colorGrey650}'
        },
        colorBackgroundCodeEditorStatusBar: {
          light: '{colorGrey150}',
          dark: '{colorGrey750}'
        },
        colorBackgroundContainerContent: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundContainerHeader: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundControlChecked: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBackgroundControlDefault: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundControlDisabled: {
          light: '{colorGrey300}',
          dark: '{colorGrey650}'
        },
        colorBackgroundDropdownItemDefault: {
          light: '{colorWhite}',
          dark: '{colorGrey750}'
        },
        colorBackgroundDropdownItemDimmed: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorBackgroundDropdownItemFilterMatch: {
          light: '{colorBlue100}',
          dark: '{colorGrey650}'
        },
        colorBackgroundDropdownItemHover: {
          light: '{colorGrey150}',
          dark: '{colorGrey850}'
        },
        colorBackgroundDropdownItemSelected: {
          light: '{colorBackgroundItemSelected}',
          dark: '{colorBackgroundItemSelected}'
        },
        colorBackgroundHomeHeader: {
          light: '{colorGrey900}',
          dark: '{colorGrey900}'
        },
        colorBackgroundInputDefault: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundInputDisabled: {
          light: '{colorGrey200}',
          dark: '{colorGrey750}'
        },
        colorBackgroundItemSelected: {
          light: '{colorBlue100}',
          dark: '{colorBlue900}'
        },
        colorBackgroundLayoutMain: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundLayoutMobilePanel: {
          light: '{colorGrey900}',
          dark: '{colorGrey900}'
        },
        colorBackgroundLayoutPanelContent: {
          light: '{colorBackgroundContainerContent}',
          dark: '{colorBackgroundContainerContent}'
        },
        colorBackgroundLayoutPanelHover: {
          light: '{colorGrey200}',
          dark: '{colorGrey650}'
        },
        colorBackgroundLayoutToggleActive: {
          light: '{colorGrey600}',
          dark: '{colorGrey600}'
        },
        colorBackgroundLayoutToggleDefault: {
          light: '{colorGrey600}',
          dark: '{colorGrey600}'
        },
        colorBackgroundLayoutToggleHover: {
          light: '{colorGrey550}',
          dark: '{colorGrey550}'
        },
        colorBackgroundLayoutToggleSelectedActive: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBackgroundLayoutToggleSelectedDefault: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBackgroundLayoutToggleSelectedHover: {
          light: '{colorBlue700}',
          dark: '{colorBlue400}'
        },
        colorBackgroundModalOverlay: {
          light: '{colorGreyOpaque70}',
          dark: '{colorGreyOpaque70}'
        },
        colorBackgroundNotificationBlue: {
          light: '{colorBlue600}',
          dark: '{colorBlue600}'
        },
        colorBackgroundNotificationGreen: {
          light: '{colorGreen600}',
          dark: '{colorGreen600}'
        },
        colorBackgroundNotificationGrey: {
          light: '{colorGrey600}',
          dark: '{colorGrey550}'
        },
        colorBackgroundNotificationRed: {
          light: '{colorRed600}',
          dark: '{colorRed600}'
        },
        colorBackgroundNotificationYellow: {
          light: '{colorYellow600}',
          dark: '{colorYellow600}'
        },
        colorBackgroundNotificationStackBar: {
          light: '{colorGrey700}',
          dark: '{colorGrey700}'
        },
        colorBackgroundNotificationStackBarActive: {
          light: '{colorGrey700}',
          dark: '{colorGrey700}'
        },
        colorBackgroundNotificationStackBarHover: {
          light: '{colorGrey600}',
          dark: '{colorGrey600}'
        },
        colorBackgroundPopover: {
          light: '{colorWhite}',
          dark: '{colorGrey750}'
        },
        colorBackgroundProgressBarContentDefault: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBackgroundProgressBarContentInFlash: {
          light: '{colorWhite}',
          dark: '{colorWhite}'
        },
        colorBackgroundProgressBarLayoutDefault: {
          light: '{colorGrey200}',
          dark: '{colorGrey650}'
        },
        colorBackgroundProgressBarLayoutInFlash: {
          light: '{colorGreyOpaque25}',
          dark: '{colorGreyOpaque25}'
        },
        colorBackgroundSegmentActive: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBackgroundSegmentDefault: {
          light: '{colorBackgroundButtonNormalDefault}',
          dark: '{colorBackgroundButtonNormalDefault}'
        },
        colorBackgroundSegmentDisabled: {
          light: '{colorBackgroundButtonNormalDisabled}',
          dark: '{colorBackgroundButtonNormalDisabled}'
        },
        colorBackgroundSegmentHover: {
          light: '{colorBackgroundSegmentDefault}',
          dark: '{colorBackgroundSegmentDefault}'
        },
        colorBackgroundSliderHandleDefault: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBackgroundSliderHandleActive: {
          light: '{colorBlue700}',
          dark: '{colorBlue400}'
        },
        colorBackgroundSliderTrack: {
          light: '{colorGrey500}',
          dark: '{colorGrey550}'
        },
        colorBackgroundSliderHandleRing: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorBackgroundSliderErrorPressed: {
          light: '{colorRed700}',
          dark: '{colorRed500}'
        },
        colorBackgroundSliderWarningPressed: {
          light: '{colorYellow800}',
          dark: '{colorYellow700}'
        },
        colorBackgroundStatusError: {
          light: '{colorRed100}',
          dark: '{colorRed900}'
        },
        colorBackgroundStatusInfo: {
          light: '{colorBlue100}',
          dark: '{colorBlue900}'
        },
        colorBackgroundStatusSuccess: {
          light: '{colorGreen100}',
          dark: '{colorGreen900}'
        },
        colorBackgroundStatusWarning: {
          light: '{colorYellow100}',
          dark: '{colorYellow900}'
        },
        colorBackgroundTableHeader: {
          light: '{colorBackgroundContainerHeader}',
          dark: '{colorBackgroundContainerHeader}'
        },
        colorBackgroundTilesDisabled: {
          light: '{colorGrey200}',
          dark: '{colorGrey750}'
        },
        colorBackgroundToggleCheckedDisabled: {
          light: '{colorBlue300}',
          dark: '{colorBlue800}'
        },
        colorBackgroundToggleDefault: {
          light: '{colorGrey600}',
          dark: '{colorGrey500}'
        },
        colorBorderButtonNormalActive: {
          light: '{colorBlue800}',
          dark: '{colorBlue400}'
        },
        colorBorderButtonNormalDefault: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBorderButtonNormalDisabled: {
          light: '{colorGrey400}',
          dark: '{colorGrey550}'
        },
        colorBorderButtonNormalHover: {
          light: '{colorBlue800}',
          dark: '{colorBlue400}'
        },
        colorBorderButtonPrimaryDisabled: {
          light: '{colorBackgroundButtonPrimaryDisabled}',
          dark: '{colorBackgroundButtonPrimaryDisabled}'
        },
        colorBorderCalendarGrid: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorBorderCalendarGridSelectedFocusRing: {
          light: '{colorGrey100}',
          dark: '{colorGrey800}'
        },
        colorBorderCodeEditorAceActiveLineLightTheme: {
          light: '{colorGrey300}',
          dark: '{colorGrey300}'
        },
        colorBorderCodeEditorAceActiveLineDarkTheme: {
          light: '{colorGrey550}',
          dark: '{colorGrey550}'
        },
        colorBorderCodeEditorDefault: {
          light: '{colorGrey300}',
          dark: '{colorGrey550}'
        },
        colorBorderCodeEditorPaneItemHover: {
          light: '{colorBorderDropdownItemHover}',
          dark: '{colorBorderDropdownItemHover}'
        },
        colorBorderContainerDivider: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorBorderContainerTop: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorBorderControlChecked: {
          light: '{colorBackgroundControlChecked}',
          dark: '{colorBackgroundControlChecked}'
        },
        colorBorderControlDefault: {
          light: '{colorGrey500}',
          dark: '{colorGrey500}'
        },
        colorBorderControlDisabled: {
          light: '{colorBackgroundControlDisabled}',
          dark: '{colorBackgroundControlDisabled}'
        },
        colorBorderDividerActive: {
          light: '{colorGrey900}',
          dark: '{colorGrey100}'
        },
        colorBorderDividerDefault: {
          light: '{colorGrey350}',
          dark: '{colorGrey600}'
        },
        colorBorderDividerPanelBottom: {
          light: '{colorBorderDividerDefault}',
          dark: '{colorBorderDividerDefault}'
        },
        colorBorderDividerPanelSide: {
          light: '{colorBorderDividerDefault}',
          dark: '{colorBorderDividerDefault}'
        },
        colorBorderDividerSecondary: {
          light: '{colorGrey200}',
          dark: '{colorGrey700}'
        },
        colorBorderDropdownContainer: {
          light: '{colorGrey400}',
          dark: '{colorGrey550}'
        },
        colorBorderDropdownGroup: {
          light: '{colorBorderDropdownItemDefault}',
          dark: '{colorBorderDropdownItemDefault}'
        },
        colorBorderDropdownItemDefault: {
          light: '{colorBorderDividerDefault}',
          dark: '{colorBorderDividerDefault}'
        },
        colorBorderDropdownItemHover: {
          light: '{colorGrey500}',
          dark: '{colorGrey550}'
        },
        colorBorderDropdownItemDimmedHover: {
          light: '{colorGrey500}',
          dark: '{colorGrey500}'
        },
        colorBorderDropdownItemSelected: {
          light: '{colorBorderItemSelected}',
          dark: '{colorBorderItemSelected}'
        },
        colorBorderDropdownItemTop: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorBorderEditableCellHover: {
          light: '{colorBorderDropdownItemHover}',
          dark: '{colorBorderDropdownItemHover}'
        },
        colorBorderInputDefault: {
          light: '{colorGrey500}',
          dark: '{colorGrey550}'
        },
        colorBorderInputDisabled: {
          light: '{colorBackgroundInputDisabled}',
          dark: '{colorBackgroundInputDisabled}'
        },
        colorBorderInputFocused: {
          light: '{colorBlue800}',
          dark: '{colorBlue300}'
        },
        colorBorderItemFocused: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBorderDropdownItemFocused: {
          light: '{colorGrey600}',
          dark: '{colorGrey300}'
        },
        colorBorderItemPlaceholder: {
          light: '{colorBorderItemSelected}',
          dark: '{colorBorderItemSelected}'
        },
        colorBorderItemSelected: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBorderLayout: {
          light: '{colorGrey300}',
          dark: '{colorGrey650}'
        },
        colorBorderNotificationStackBar: {
          light: '{colorGrey700}',
          dark: '{colorGrey700}'
        },
        colorBorderPanelHeader: {
          light: '{colorBorderDividerDefault}',
          dark: '{colorBorderDividerDefault}'
        },
        colorBorderPopover: {
          light: '{colorGrey400}',
          dark: '{colorGrey550}'
        },
        colorBorderSegmentActive: {
          light: '{colorBorderSegmentDefault}',
          dark: '{colorBorderSegmentDefault}'
        },
        colorBorderSegmentDefault: {
          light: '{colorGrey600}',
          dark: '{colorGrey300}'
        },
        colorBorderSegmentDisabled: {
          light: '{colorBorderSegmentDefault}',
          dark: '{colorBorderSegmentDefault}'
        },
        colorBorderSegmentHover: {
          light: '{colorBorderSegmentDefault}',
          dark: '{colorBorderSegmentDefault}'
        },
        colorBorderStatusError: {
          light: '{colorRed600}',
          dark: '{colorRed500}'
        },
        colorBorderStatusInfo: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorBorderStatusSuccess: {
          light: '{colorGreen600}',
          dark: '{colorGreen500}'
        },
        colorBorderStatusWarning: {
          light: '{colorYellow800}',
          dark: '{colorYellow700}'
        },
        colorBorderDividerInteractiveDefault: {
          light: '{colorGrey500}',
          dark: '{colorGrey300}'
        },
        colorBorderTabsDivider: {
          light: '{colorGrey350}',
          dark: '{colorGrey600}'
        },
        colorBorderTabsShadow: {
          light: '{colorGreyTransparent}',
          dark: '{colorGreyTransparent}'
        },
        colorBorderTabsUnderline: {
          light: '{colorTextAccent}',
          dark: '{colorTextAccent}'
        },
        colorBorderTilesDisabled: {
          light: '{colorBackgroundTilesDisabled}',
          dark: '{colorBackgroundTilesDisabled}'
        },
        colorBorderTutorial: {
          light: '{colorGrey300}',
          dark: '{colorGrey600}'
        },
        colorForegroundControlDefault: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorForegroundControlDisabled: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorShadowDefault: {
          light: '{colorGreyTransparentHeavy}',
          dark: '{colorGreyTransparentHeavy}'
        },
        colorShadowMedium: {
          light: '{colorGreyTransparent}',
          dark: '{colorGreyTransparent}'
        },
        colorShadowSide: {
          light: '{colorGreyTransparentLight}',
          dark: '{colorGreyTransparentLight}'
        },
        colorStrokeChartLine: {
          light: '{colorGrey500}',
          dark: '{colorGrey500}'
        },
        colorStrokeCodeEditorResizeHandler: {
          light: '{colorGrey600}',
          dark: '{colorGrey300}'
        },
        colorStrokeCodeEditorGutterActiveLineDefault: {
          light: '{colorGrey300}',
          dark: '{colorGrey750}'
        },
        colorStrokeCodeEditorGutterActiveLineHover: {
          light: '{colorGrey100}',
          dark: '{colorGrey900}'
        },
        colorTextAccent: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorTextBodyDefault: {
          light: '{colorGrey900}',
          dark: '{colorGrey350}'
        },
        colorTextBodySecondary: {
          light: '{colorGrey600}',
          dark: '{colorGrey350}'
        },
        colorTextBreadcrumbCurrent: {
          light: '{colorGrey550}',
          dark: '{colorGrey500}'
        },
        colorTextBreadcrumbIcon: {
          light: '{colorGrey500}',
          dark: '{colorTextInteractiveDisabled}'
        },
        colorTextButtonInlineIconDefault: {
          light: '{colorTextLinkDefault}',
          dark: '{colorTextLinkDefault}'
        },
        colorTextButtonInlineIconDisabled: {
          light: '{colorTextInteractiveDisabled}',
          dark: '{colorTextInteractiveDisabled}'
        },
        colorTextButtonInlineIconHover: {
          light: '{colorTextLinkHover}',
          dark: '{colorTextLinkHover}'
        },
        colorTextButtonNormalActive: {
          light: '{colorBlue800}',
          dark: '{colorBlue400}'
        },
        colorTextButtonNormalDefault: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorTextButtonNormalHover: {
          light: '{colorBlue800}',
          dark: '{colorBlue400}'
        },
        colorTextLinkButtonNormalDefault: {
          light: '{colorTextButtonNormalDefault}',
          dark: '{colorTextButtonNormalDefault}'
        },
        colorTextLinkButtonNormalHover: {
          light: '{colorTextButtonNormalHover}',
          dark: '{colorTextButtonNormalHover}'
        },
        colorTextLinkButtonNormalActive: {
          light: '{colorTextButtonNormalActive}',
          dark: '{colorTextButtonNormalActive}'
        },
        colorTextButtonPrimaryActive: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextButtonPrimaryDefault: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextButtonPrimaryHover: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextCalendarDateHover: {
          light: '{colorTextDropdownItemDefault}',
          dark: '{colorTextDropdownItemDefault}'
        },
        colorTextCalendarDateSelected: {
          light: '{colorTextAccent}',
          dark: '{colorTextAccent}'
        },
        colorTextCalendarMonth: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorTextCodeEditorGutterActiveLine: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextCodeEditorGutterDefault: {
          light: '{colorGrey900}',
          dark: '{colorGrey300}'
        },
        colorTextCodeEditorStatusBarDisabled: {
          light: '{colorGrey500}',
          dark: '{colorGrey550}'
        },
        colorTextCodeEditorTabButtonError: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextColumnHeader: {
          light: '{colorGrey600}',
          dark: '{colorGrey400}'
        },
        colorTextColumnSortingIcon: {
          light: '{colorTextColumnHeader}',
          dark: '{colorTextColumnHeader}'
        },
        colorTextControlDisabled: {
          light: '{colorTextInteractiveDisabled}',
          dark: '{colorTextInteractiveDisabled}'
        },
        colorTextCounter: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorTextDisabled: {
          light: '{colorGrey400}',
          dark: '{colorGrey550}'
        },
        colorTextDisabledInlineEdit: {
          light: '{colorGrey600}',
          dark: '{colorGrey400}'
        },
        colorTextDropdownFooter: {
          light: '{colorTextFormSecondary}',
          dark: '{colorTextFormSecondary}'
        },
        colorTextDropdownGroupLabel: {
          light: '{colorTextGroupLabel}',
          dark: '{colorTextGroupLabel}'
        },
        colorTextDropdownItemDefault: {
          light: '{colorGrey900}',
          dark: '{colorGrey300}'
        },
        colorTextDropdownItemDimmed: {
          light: '{colorTextInteractiveDisabled}',
          dark: '{colorTextInteractiveDisabled}'
        },
        colorTextDropdownItemDisabled: {
          light: '{colorTextInteractiveDisabled}',
          dark: '{colorTextInteractiveDisabled}'
        },
        colorTextDropdownItemFilterMatch: {
          light: '{colorBlue600}',
          dark: '{colorBlue400}'
        },
        colorTextDropdownItemHighlighted: {
          light: '{colorGrey900}',
          dark: '{colorGrey200}'
        },
        colorTextDropdownItemSecondary: {
          light: '{colorTextFormSecondary}',
          dark: '{colorTextFormSecondary}'
        },
        colorTextDropdownItemSecondaryHover: {
          light: '{colorGrey550}',
          dark: '{colorGrey300}'
        },
        colorTextEmpty: {
          light: '{colorGrey550}',
          dark: '{colorGrey300}'
        },
        colorTextExpandableSectionDefault: {
          light: '{colorGrey900}',
          dark: '{colorGrey300}'
        },
        colorTextExpandableSectionHover: {
          light: '{colorTextAccent}',
          dark: '{colorTextAccent}'
        },
        colorTextExpandableSectionNavigationIconDefault: {
          light: '{colorTextInteractiveDefault}',
          dark: '{colorTextInteractiveDefault}'
        },
        colorTextFormDefault: {
          light: '{colorGrey900}',
          dark: '{colorGrey300}'
        },
        colorTextFormLabel: {
          light: '{colorTextFormDefault}',
          dark: '{colorTextFormDefault}'
        },
        colorTextFormSecondary: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorTextGroupLabel: {
          light: '{colorGrey600}',
          dark: '{colorGrey350}'
        },
        colorTextLabelGenAi: {
          light: '{colorPurple600}',
          dark: '{colorPurple400}'
        },
        colorTextHeadingDefault: {
          light: '{colorGrey900}',
          dark: '{colorGrey300}'
        },
        colorTextHeadingSecondary: {
          light: '{colorGrey600}',
          dark: '{colorGrey450}'
        },
        colorTextHomeHeaderDefault: {
          light: '{colorGrey200}',
          dark: '{colorGrey200}'
        },
        colorTextHomeHeaderSecondary: {
          light: '{colorGrey350}',
          dark: '{colorGrey350}'
        },
        colorTextIconCaret: {
          light: '{colorGrey500}',
          dark: '{colorGrey450}'
        },
        colorTextIconSubtle: {
          light: '{colorGrey550}',
          dark: '{colorGrey400}'
        },
        colorTextInputDisabled: {
          light: '{colorGrey400}',
          dark: '{colorGrey550}'
        },
        colorTextInputPlaceholder: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorTextInputPlaceholderDisabled: {
          light: '{colorTextInputDisabled}',
          dark: '{colorTextInputDisabled}'
        },
        colorTextInteractiveActive: {
          light: '{colorGrey900}',
          dark: '{colorGrey100}'
        },
        colorTextInteractiveDefault: {
          light: '{colorGrey600}',
          dark: '{colorGrey300}'
        },
        colorTextInteractiveDisabled: {
          light: '{colorGrey400}',
          dark: '{colorGrey550}'
        },
        colorTextInteractiveHover: {
          light: '{colorGrey900}',
          dark: '{colorGrey100}'
        },
        colorTextInteractiveInvertedDefault: {
          light: '{colorGrey300}',
          dark: '{colorGrey300}'
        },
        colorTextInteractiveInvertedHover: {
          light: '{colorGrey100}',
          dark: '{colorGrey100}'
        },
        colorTextInverted: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextLabel: {
          light: '{colorTextFormLabel}',
          dark: '{colorTextFormLabel}'
        },
        colorTextLayoutToggle: {
          light: '{colorWhite}',
          dark: '{colorWhite}'
        },
        colorTextLayoutToggleActive: {
          light: '{colorWhite}',
          dark: '{colorGrey800}'
        },
        colorTextLayoutToggleHover: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorTextLayoutToggleSelected: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextLinkDefault: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorTextLinkHover: {
          light: '{colorBlue800}',
          dark: '{colorBlue400}'
        },
        colorTextLinkInvertedHover: {
          light: '{colorWhite}',
          dark: '{colorWhite}'
        },
        colorTextLinkButtonUnderline: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorTextLinkButtonUnderlineHover: {
          light: 'transparent',
          dark: 'transparent'
        },
        colorTextNotificationDefault: {
          light: '{colorGrey100}',
          dark: '{colorGrey100}'
        },
        colorTextNotificationStackBar: {
          light: '{colorWhite}',
          dark: '{colorWhite}'
        },
        colorTextNotificationYellow: {
          light: '{colorGrey900}',
          dark: '{colorGrey900}'
        },
        colorTextPaginationPageNumberActiveDisabled: {
          light: '{colorTextInteractiveDisabled}',
          dark: '{colorTextInteractiveDisabled}'
        },
        colorTextPaginationPageNumberDefault: {
          light: '{colorTextInteractiveDefault}',
          dark: '{colorGrey400}'
        },
        colorTextSegmentActive: {
          light: '{colorWhite}',
          dark: '{colorGrey900}'
        },
        colorTextSegmentDefault: {
          light: '{colorGrey600}',
          dark: '{colorGrey300}'
        },
        colorTextSegmentHover: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorTextSmall: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorTextStatusError: {
          light: '{colorRed600}',
          dark: '{colorRed500}'
        },
        colorTextStatusInactive: {
          light: '{colorGrey550}',
          dark: '{colorGrey450}'
        },
        colorTextStatusInfo: {
          light: '{colorBlue600}',
          dark: '{colorBlue500}'
        },
        colorTextStatusSuccess: {
          light: '{colorGreen600}',
          dark: '{colorGreen500}'
        },
        colorTextStatusWarning: {
          light: '{colorYellow800}',
          dark: '{colorYellow700}'
        },
        colorTextTopNavigationTitle: {
          light: '{colorGrey900}',
          dark: '{colorGrey100}'
        },
        colorBoardPlaceholderActive: {
          light: '{colorGrey200}',
          dark: '{colorGrey550}'
        },
        colorBoardPlaceholderHover: {
          light: '{colorBlue200}',
          dark: '{colorBlue600}'
        },
        colorDragPlaceholderActive: {
          light: '{colorGrey200}',
          dark: '{colorGrey550}'
        },
        colorDragPlaceholderHover: {
          light: '{colorBlue200}',
          dark: '{colorBlue600}'
        },
        colorDropzoneBackgroundActive: {
          light: '{colorGrey200}',
          dark: '{colorGrey500}'
        },
        colorDropzoneBackgroundHover: {
          light: '{colorBlue200}',
          dark: '{colorBlue600}'
        },
        colorDropzoneTextActive: {
          light: '{colorGrey550}',
          dark: '{colorGrey800}'
        },
        colorDropzoneTextHover: {
          light: '{colorBlue800}',
          dark: '{colorWhite}'
        },
        fontBoxValueLargeWeight: '700',
        fontButtonLetterSpacing: '0.005em',
        fontButtonWeight: '700',
        fontChartDetailSize: '{fontSizeBodyS}',
        fontDisplayLabelWeight: '700',
        fontExpandableHeadingSize: '{fontSizeHeadingS}',
        fontFamilyBase:
          "'Open Sans', 'Helvetica Neue', Roboto, Arial, sans-serif",
        fontFamilyMonospace:
          "Monaco, Menlo, Consolas, 'Courier Prime', Courier, 'Courier New', monospace",
        fontHeaderH2DescriptionLineHeight: '{lineHeightBodyM}',
        fontHeaderH2DescriptionSize: '{fontSizeBodyM}',
        fontLinkButtonLetterSpacing: '{fontButtonLetterSpacing}',
        fontLinkButtonWeight: '{fontButtonWeight}',
        fontPanelHeaderLineHeight: '{lineHeightHeadingM}',
        fontPanelHeaderSize: '{fontSizeHeadingM}',
        fontSizeBodyM: '14px',
        fontSizeBodyS: '12px',
        fontSizeDisplayL: '42px',
        fontSizeHeadingXl: '24px',
        fontSizeHeadingL: '20px',
        fontSizeHeadingM: '18px',
        fontSizeHeadingS: '16px',
        fontSizeHeadingXs: '14px',
        fontSmoothingMozOsx: 'grayscale',
        fontSmoothingWebkit: 'antialiased',
        fontTabsDisabledWeight: '{fontWayfindingLinkActiveWeight}',
        fontTabsLineHeight: '{lineHeightHeadingS}',
        fontTabsSize: '{fontSizeHeadingS}',
        fontWayfindingLinkActiveWeight: '700',
        fontWeightHeadingXl: '700',
        fontWeightHeadingL: '700',
        fontWeightHeadingM: '700',
        fontWeightHeadingS: '700',
        fontWeightHeadingXs: '700',
        fontWeightHeavy: '700',
        letterSpacingBodyS: '0.005em',
        letterSpacingDisplayL: '-0.03em',
        letterSpacingHeadingXl: '-0.02em',
        letterSpacingHeadingL: '-0.015em',
        letterSpacingHeadingM: '-0.010em',
        letterSpacingHeadingS: '-0.005em',
        lineHeightBodyM: '20px',
        lineHeightBodyS: '16px',
        lineHeightDisplayL: '48px',
        lineHeightHeadingXl: '30px',
        lineHeightHeadingL: '24px',
        lineHeightHeadingM: '22px',
        lineHeightHeadingS: '20px',
        lineHeightHeadingXs: '18px',
        borderActiveWidth: '4px',
        borderCodeEditorStatusDividerWidth: '{borderDividerSectionWidth}',
        borderContainerStickyWidth: '0px',
        borderContainerTopWidth: '0px',
        borderControlFocusRingShadowSpread: '0px',
        borderControlInvalidFocusRingShadowSpread: '2px',
        borderDividerListWidth: '1px',
        borderDividerSectionWidth: '1px',
        borderDropdownVirtualOffsetWidth: '2px',
        borderFieldWidth: '2px',
        borderInvalidWidth: '8px',
        borderItemWidth: '2px',
        borderLineChartDashArray: '3 5',
        borderLineChartLineJoin: 'round',
        borderLineChartWidth: '2px',
        borderPanelHeaderWidth: '1px',
        borderPanelTopWidth: '1px',
        borderRadiusAlert: '{borderRadiusFlashbar}',
        borderRadiusBadge: '4px',
        borderRadiusButton: '20px',
        borderRadiusCalendarDayFocusRing: '3px',
        borderRadiusCodeEditor: '{borderRadiusInput}',
        borderRadiusContainer: '16px',
        borderRadiusControlCircularFocusRing: '4px',
        borderRadiusControlDefaultFocusRing: '4px',
        borderRadiusDropdown: '{borderRadiusItem}',
        borderRadiusDropzone: '12px',
        borderRadiusFlashbar: '12px',
        borderRadiusItem: '8px',
        borderRadiusInput: '8px',
        borderRadiusPopover: '{borderRadiusInput}',
        borderRadiusTabsFocusRing: '20px',
        borderRadiusTiles: '{borderRadiusInput}',
        borderRadiusToken: '{borderRadiusInput}',
        borderRadiusTutorialPanelItem: '{borderRadiusInput}',
        borderTableStickyWidth: '1px',
        borderLinkFocusRingOutline: '0',
        borderLinkFocusRingShadowSpread: '2px',
        motionDurationExtraFast: {
          default: '45ms',
          disabled: '0ms'
        },
        motionDurationExtraSlow: {
          default: '270ms',
          disabled: '0ms'
        },
        motionDurationFast: {
          default: '90ms',
          disabled: '0ms'
        },
        motionDurationModerate: {
          default: '135ms',
          disabled: '0ms'
        },
        motionDurationRefreshOnlyAmbient: {
          default: '2000ms',
          disabled: '0ms'
        },
        motionDurationRefreshOnlyFast: {
          default: '115ms',
          disabled: '0ms'
        },
        motionDurationRefreshOnlyMedium: {
          default: '165ms',
          disabled: '0ms'
        },
        motionDurationRefreshOnlySlow: {
          default: '250ms',
          disabled: '0ms'
        },
        motionDurationRotate180: {
          default: '{motionDurationModerate}',
          disabled: '{motionDurationModerate}'
        },
        motionDurationRotate90: {
          default: '{motionDurationModerate}',
          disabled: '{motionDurationModerate}'
        },
        motionDurationShowPaced: {
          default: '{motionDurationSlow}',
          disabled: '{motionDurationSlow}'
        },
        motionDurationShowQuick: {
          default: '{motionDurationModerate}',
          disabled: '{motionDurationModerate}'
        },
        motionDurationSlow: {
          default: '180ms',
          disabled: '0ms'
        },
        motionDurationTransitionQuick: {
          default: '{motionDurationFast}',
          disabled: '{motionDurationFast}'
        },
        motionDurationTransitionShowPaced: {
          default: '{motionDurationSlow}',
          disabled: '{motionDurationSlow}'
        },
        motionDurationTransitionShowQuick: {
          default: '{motionDurationFast}',
          disabled: '{motionDurationFast}'
        },
        motionEasingEaseOutQuart: {
          default: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
          disabled: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
        },
        motionEasingRefreshOnlyA: {
          default: 'cubic-bezier(0, 0, 0, 1)',
          disabled: 'cubic-bezier(0, 0, 0, 1)'
        },
        motionEasingRefreshOnlyB: {
          default: 'cubic-bezier(1, 0, 0.83, 1)',
          disabled: 'cubic-bezier(1, 0, 0.83, 1)'
        },
        motionEasingRefreshOnlyC: {
          default: 'cubic-bezier(0.84, 0, 0.16, 1)',
          disabled: 'cubic-bezier(0.84, 0, 0.16, 1)'
        },
        motionEasingRefreshOnlyD: {
          default: 'cubic-bezier(0.33, 0, 0.67, 1)',
          disabled: 'cubic-bezier(0.33, 0, 0.67, 1)'
        },
        motionEasingRotate180: {
          default: '{motionEasingEaseOutQuart}',
          disabled: '{motionEasingEaseOutQuart}'
        },
        motionEasingRotate90: {
          default: '{motionEasingEaseOutQuart}',
          disabled: '{motionEasingEaseOutQuart}'
        },
        motionEasingShowPaced: {
          default: 'ease-out',
          disabled: 'ease-out'
        },
        motionEasingShowQuick: {
          default: 'ease-out',
          disabled: 'ease-out'
        },
        motionEasingTransitionQuick: {
          default: 'linear',
          disabled: 'linear'
        },
        motionEasingTransitionShowPaced: {
          default: 'ease-out',
          disabled: 'ease-out'
        },
        motionEasingTransitionShowQuick: {
          default: 'linear',
          disabled: 'linear'
        },
        motionEasingResponsive: {
          default: '{motionEasingRefreshOnlyA}',
          disabled: '{motionEasingRefreshOnlyA}'
        },
        motionEasingSticky: {
          default: '{motionEasingRefreshOnlyB}',
          disabled: '{motionEasingRefreshOnlyB}'
        },
        motionEasingExpressive: {
          default: '{motionEasingRefreshOnlyC}',
          disabled: '{motionEasingRefreshOnlyC}'
        },
        motionDurationResponsive: {
          default: '{motionDurationRefreshOnlyFast}',
          disabled: '{motionDurationRefreshOnlyFast}'
        },
        motionDurationExpressive: {
          default: '{motionDurationRefreshOnlyMedium}',
          disabled: '{motionDurationRefreshOnlyMedium}'
        },
        motionDurationComplex: {
          default: '{motionDurationRefreshOnlySlow}',
          disabled: '{motionDurationRefreshOnlySlow}'
        },
        motionKeyframesFadeIn: {
          default: 'awsui-fade-in-35003c',
          disabled: 'awsui-fade-in-35003c'
        },
        motionKeyframesFadeOut: {
          default: 'awsui-fade-out-35003c',
          disabled: 'awsui-fade-out-35003c'
        },
        motionKeyframesStatusIconError: {
          default: 'awsui-status-icon-error-35003c',
          disabled: 'awsui-status-icon-error-35003c'
        },
        motionKeyframesScalePopup: {
          default: 'awsui-scale-popup-35003c',
          disabled: 'awsui-scale-popup-35003c'
        },
        sizeCalendarGridWidth: {
          comfortable: '238px',
          compact: '238px'
        },
        sizeControl: {
          comfortable: '16px',
          compact: '16px'
        },
        sizeIconBig: {
          comfortable: '32px',
          compact: '32px'
        },
        sizeIconLarge: {
          comfortable: '48px',
          compact: '48px'
        },
        sizeIconMedium: {
          comfortable: '20px',
          compact: '20px'
        },
        sizeIconNormal: {
          comfortable: '16px',
          compact: '16px'
        },
        sizeTableSelectionHorizontal: {
          comfortable: '40px',
          compact: '40px'
        },
        sizeVerticalInput: {
          comfortable: '32px',
          compact: '28px'
        },
        sizeVerticalPanelIconOffset: {
          comfortable: '15px',
          compact: '13px'
        },
        spaceAlertActionLeft: {
          comfortable: '{spaceS}',
          compact: '{spaceS}'
        },
        spaceAlertHorizontal: {
          comfortable: '{spaceFlashbarHorizontal}',
          compact: '{spaceFlashbarHorizontal}'
        },
        spaceAlertMessageRight: {
          comfortable: '{spaceXxs}',
          compact: '{spaceXxs}'
        },
        spaceAlertVertical: {
          comfortable: '{spaceScaledXs}',
          compact: '{spaceScaledXs}'
        },
        spaceButtonFocusOutlineGutter: {
          comfortable: '4px',
          compact: '4px'
        },
        spaceButtonHorizontal: {
          comfortable: '{spaceScaledL}',
          compact: '{spaceScaledL}'
        },
        spaceButtonIconFocusOutlineGutterVertical: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceButtonIconOnlyHorizontal: {
          comfortable: '6px',
          compact: '{spaceXxs}'
        },
        spaceButtonInlineIconFocusOutlineGutter: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceButtonModalDismissVertical: {
          comfortable: '{spaceScaledXxxs}',
          compact: '{spaceScaledXxxs}'
        },
        spaceCalendarGridFocusOutlineGutter: {
          comfortable: '-5px',
          compact: '-5px'
        },
        spaceCalendarGridSelectedFocusOutlineGutter: {
          comfortable: '{spaceCalendarGridFocusOutlineGutter}',
          compact: '{spaceCalendarGridFocusOutlineGutter}'
        },
        spaceCalendarGridGutter: {
          comfortable: '6px',
          compact: '6px'
        },
        spaceCardHorizontal: {
          comfortable: '{spaceContainerHorizontal}',
          compact: '{spaceContainerHorizontal}'
        },
        spaceCardVertical: {
          comfortable: '{spaceScaledM}',
          compact: '{spaceScaledM}'
        },
        spaceCodeEditorStatusFocusOutlineGutter: {
          comfortable: '-7px',
          compact: '-7px'
        },
        spaceContainerContentTop: {
          comfortable: '{spaceXxs}',
          compact: '{spaceXxs}'
        },
        spaceContainerHeaderTop: {
          comfortable: '{spaceS}',
          compact: '{spaceS}'
        },
        spaceContainerHeaderBottom: {
          comfortable: '{spaceScaledXs}',
          compact: '{spaceScaledXs}'
        },
        spaceContainerHorizontal: {
          comfortable: '{spaceL}',
          compact: '{spaceL}'
        },
        spaceContentHeaderPaddingBottom: {
          comfortable: '{spaceScaledM}',
          compact: '{spaceScaledM}'
        },
        spaceDarkHeaderOverlapDistance: {
          comfortable: '36px',
          compact: '32px'
        },
        spaceExpandableSectionIconOffsetTop: {
          comfortable: '{spaceScaled2xXxs}',
          compact: '{spaceScaled2xXxs}'
        },
        spaceFieldHorizontal: {
          comfortable: '{spaceS}',
          compact: '{spaceS}'
        },
        spaceFieldIconOffset: {
          comfortable: '36px',
          compact: '36px'
        },
        spaceFilteringTokenDismissButtonFocusOutlineGutter: {
          comfortable: '-5px',
          compact: '-5px'
        },
        spaceFilteringTokenOperationSelectFocusOutlineGutter: {
          comfortable: '-5px',
          compact: '-5px'
        },
        spaceFlashbarActionLeft: {
          comfortable: '{spaceS}',
          compact: '{spaceS}'
        },
        spaceFlashbarDismissRight: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceFlashbarHorizontal: {
          comfortable: '{spaceM}',
          compact: '{spaceM}'
        },
        spaceGridGutter: {
          comfortable: '{spaceL}',
          compact: '{spaceM}'
        },
        spaceKeyValueGap: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceLayoutContentBottom: {
          comfortable: '{spaceScaled2xXxxl}',
          compact: '{spaceScaled2xXxxl}'
        },
        spaceLayoutContentHorizontal: {
          comfortable: '{spaceScaled2xXl}',
          compact: '{spaceScaled2xXl}'
        },
        spaceLayoutToggleDiameter: {
          comfortable: '36px',
          compact: '36px'
        },
        spaceLayoutTogglePadding: {
          comfortable: '{spaceStaticS}',
          compact: '{spaceStaticS}'
        },
        spaceModalContentBottom: {
          comfortable: '{spaceScaled2xM}',
          compact: '{spaceScaled2xM}'
        },
        spaceModalHorizontal: {
          comfortable: '{spaceContainerHorizontal}',
          compact: '{spaceContainerHorizontal}'
        },
        spaceOptionIconBigTop: {
          comfortable: '0px',
          compact: '0px'
        },
        spacePanelContentBottom: {
          comfortable: '{spaceScaledXxxl}',
          compact: '{spaceScaledXxxl}'
        },
        spacePanelContentTop: {
          comfortable: '{spaceScaledL}',
          compact: '{spaceScaledL}'
        },
        spacePanelDividerMarginHorizontal: {
          comfortable: '{spaceXs}',
          compact: '{spaceXs}'
        },
        spacePanelHeaderVertical: {
          comfortable: '{spaceScaledL}',
          compact: '{spaceScaledL}'
        },
        spacePanelNavLeft: {
          comfortable: '28px',
          compact: '28px'
        },
        spacePanelSideLeft: {
          comfortable: '28px',
          compact: '28px'
        },
        spacePanelSideRight: {
          comfortable: '{spaceScaledXl}',
          compact: '{spaceScaledXl}'
        },
        spacePanelSplitTop: {
          comfortable: '{spaceScaledL}',
          compact: '{spaceScaledL}'
        },
        spacePanelSplitBottom: {
          comfortable: '{spaceScaledL}',
          compact: '{spaceScaledL}'
        },
        spaceSegmentedControlFocusOutlineGutter: {
          comfortable: '4px',
          compact: '4px'
        },
        spaceTabsContentTop: {
          comfortable: '{spaceScaledS}',
          compact: '{spaceScaledS}'
        },
        spaceTabsFocusOutlineGutter: {
          comfortable: '-8px',
          compact: '-8px'
        },
        spaceTableContentBottom: {
          comfortable: '{spaceXxs}',
          compact: '{spaceXxs}'
        },
        spaceTableEmbeddedHeaderTop: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceTableFooterHorizontal: {
          comfortable: '{spaceTableHeaderHorizontal}',
          compact: '{spaceTableHeaderHorizontal}'
        },
        spaceTableHeaderFocusOutlineGutter: {
          comfortable: '0px',
          compact: '-1px'
        },
        spaceTableHeaderHorizontal: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceTableHeaderToolsBottom: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceTableHeaderToolsFullPageBottom: {
          comfortable: '4px',
          compact: '4px'
        },
        spaceTableHorizontal: {
          comfortable: '{spaceContainerHorizontal}',
          compact: '{spaceContainerHorizontal}'
        },
        spaceScaled2xNone: {
          comfortable: '{spaceNone}',
          compact: '{spaceNone}'
        },
        spaceScaled2xXxxs: {
          comfortable: '{spaceXxxs}',
          compact: '{spaceNone}'
        },
        spaceScaled2xXxs: {
          comfortable: '{spaceXxs}',
          compact: '{spaceNone}'
        },
        spaceScaled2xXs: {
          comfortable: '{spaceXs}',
          compact: '{spaceNone}'
        },
        spaceScaled2xS: {
          comfortable: '{spaceS}',
          compact: '{spaceXxs}'
        },
        spaceScaled2xM: {
          comfortable: '{spaceM}',
          compact: '{spaceXs}'
        },
        spaceScaled2xL: {
          comfortable: '{spaceL}',
          compact: '{spaceS}'
        },
        spaceScaled2xXl: {
          comfortable: '{spaceXl}',
          compact: '{spaceM}'
        },
        spaceScaled2xXxl: {
          comfortable: '{spaceXxl}',
          compact: '{spaceL}'
        },
        spaceScaled2xXxxl: {
          comfortable: '{spaceXxxl}',
          compact: '{spaceXl}'
        },
        spaceScaledNone: {
          comfortable: '{spaceNone}',
          compact: '{spaceNone}'
        },
        spaceScaledXxxs: {
          comfortable: '{spaceXxxs}',
          compact: '{spaceNone}'
        },
        spaceScaledXxs: {
          comfortable: '{spaceXxs}',
          compact: '{spaceXxxs}'
        },
        spaceScaledXs: {
          comfortable: '{spaceXs}',
          compact: '{spaceXxs}'
        },
        spaceScaledS: {
          comfortable: '{spaceS}',
          compact: '{spaceXs}'
        },
        spaceScaledM: {
          comfortable: '{spaceM}',
          compact: '{spaceS}'
        },
        spaceScaledL: {
          comfortable: '{spaceL}',
          compact: '{spaceM}'
        },
        spaceScaledXl: {
          comfortable: '{spaceXl}',
          compact: '{spaceL}'
        },
        spaceScaledXxl: {
          comfortable: '{spaceXxl}',
          compact: '{spaceXl}'
        },
        spaceScaledXxxl: {
          comfortable: '{spaceXxxl}',
          compact: '{spaceXxl}'
        },
        spaceStaticXxxs: {
          comfortable: '{spaceXxxs}',
          compact: '{spaceXxxs}'
        },
        spaceStaticXxs: {
          comfortable: '{spaceXxs}',
          compact: '{spaceXxs}'
        },
        spaceStaticXs: {
          comfortable: '{spaceXs}',
          compact: '{spaceXs}'
        },
        spaceStaticS: {
          comfortable: '{spaceS}',
          compact: '{spaceS}'
        },
        spaceStaticM: {
          comfortable: '{spaceM}',
          compact: '{spaceM}'
        },
        spaceStaticL: {
          comfortable: '{spaceL}',
          compact: '{spaceL}'
        },
        spaceStaticXl: {
          comfortable: '{spaceXl}',
          compact: '{spaceXl}'
        },
        spaceStaticXxl: {
          comfortable: '{spaceXxl}',
          compact: '{spaceXxl}'
        },
        spaceStaticXxxl: {
          comfortable: '{spaceXxxl}',
          compact: '{spaceXxxl}'
        },
        spaceNone: {
          comfortable: '0px',
          compact: '0px'
        },
        spaceXxxs: {
          comfortable: '2px',
          compact: '2px'
        },
        spaceXxs: {
          comfortable: '4px',
          compact: '4px'
        },
        spaceXs: {
          comfortable: '8px',
          compact: '8px'
        },
        spaceS: {
          comfortable: '12px',
          compact: '12px'
        },
        spaceM: {
          comfortable: '16px',
          compact: '16px'
        },
        spaceL: {
          comfortable: '20px',
          compact: '20px'
        },
        spaceXl: {
          comfortable: '24px',
          compact: '24px'
        },
        spaceXxl: {
          comfortable: '32px',
          compact: '32px'
        },
        spaceXxxl: {
          comfortable: '40px',
          compact: '40px'
        },
        shadowContainer: {
          light:
            '0px 0px 1px 1px #e9ebed, 0px 1px 8px 2px rgba(0, 7, 22, 0.12)',
          dark: '0px 1px 8px 2px rgba(0, 7, 22, 0.6)'
        },
        shadowContainerStacked: {
          light:
            '-1px 1px 1px 0px #e9ebed, 1px 1px 1px 0px #e9ebed, 0px 9px 8px -7px rgb(0 7 22 / 12%), 8px 0px 8px -7px rgb(0 7 22 / 12%), -8px 0px 8px -7px rgb(0 7 22 / 12%)',
          dark: '0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)'
        },
        shadowContainerActive: {
          light: '0px 1px 1px 1px #e9ebed, 0px 6px 36px #0007161a',
          dark: '0px 1px 1px 1px #192534, 0px 6px 36px #00040c'
        },
        shadowDropdown: {
          light: '0px 4px 20px 1px rgba(0, 7, 22, 0.10)',
          dark: '0px 4px 20px 1px rgba(0, 4, 12, 1)'
        },
        shadowDropup: {
          light: '{shadowDropdown}',
          dark: '{shadowDropdown}'
        },
        shadowFlashCollapsed: {
          light: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          dark: '0px 4px 4px rgba(0, 0, 0, 0.25)'
        },
        shadowFlashSticky: {
          light: '0px 4px 8px rgba(0, 7, 22, 0.10)',
          dark: '0px 4px 8px rgba(0, 7, 22, 0.5)'
        },
        shadowModal: {
          light: '{shadowDropdown}',
          dark: '{shadowDropdown}'
        },
        shadowPanel: {
          light: '0px 0px 0px 1px #b6bec9',
          dark: '0px 0px 0px 1px #414d5c'
        },
        shadowPanelToggle: {
          light: '0px 6px 12px 1px rgba(0, 7, 22, 0.12)',
          dark: '0px 6px 12px 1px rgba(0, 7, 22, 1)'
        },
        shadowPopover: {
          light: '{shadowDropdown}',
          dark: '{shadowDropdown}'
        },
        shadowSplitBottom: {
          light: '0px -36px 36px -36px rgba(0, 7, 22, 0.10)',
          dark: '0px -36px 36px -36px rgba(0, 7, 22, 1)'
        },
        shadowSplitSide: {
          light:
            '-1px 0px 1px 0px #e9ebed, -36px 6px 36px -36px rgba(0, 7, 22, 0.10)',
          dark: '-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)'
        },
        shadowSticky: {
          light: '0px 4px 8px 1px rgba(0, 7, 22, 0.10)',
          dark: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)'
        },
        shadowStickyEmbedded: {
          light:
            '0px 2px 0px 0px #e9ebed, 0px 16px 16px -12px rgba(0, 7, 22, 0.10)',
          dark: '0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)'
        },
        shadowStickyColumnFirst: {
          light: '4px 0px 8px 1px rgba(0, 7, 22, 0.1)',
          dark: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)'
        },
        shadowStickyColumnLast: {
          light: '-4px 0 8px 1px rgba(0, 28, 36, 0.1)',
          dark: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)'
        }
      },
      contexts: {
        'compact-table': {
          id: 'compact-table',
          selector: '.awsui-context-compact-table',
          tokens: {
            spaceAlertActionLeft: {
              comfortable: '{spaceS}',
              compact: '{spaceS}'
            },
            spaceAlertHorizontal: {
              comfortable: '{spaceFlashbarHorizontal}',
              compact: '{spaceFlashbarHorizontal}'
            },
            spaceAlertMessageRight: {
              comfortable: '{spaceXxs}',
              compact: '{spaceXxs}'
            },
            spaceAlertVertical: {
              comfortable: '{spaceScaledXs}',
              compact: '{spaceScaledXs}'
            },
            spaceButtonFocusOutlineGutter: {
              comfortable: '4px',
              compact: '4px'
            },
            spaceButtonHorizontal: {
              comfortable: '{spaceScaledL}',
              compact: '{spaceScaledL}'
            },
            spaceButtonIconFocusOutlineGutterVertical: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceButtonIconOnlyHorizontal: {
              comfortable: '6px',
              compact: '{spaceXxs}'
            },
            spaceButtonInlineIconFocusOutlineGutter: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceButtonModalDismissVertical: {
              comfortable: '{spaceScaledXxxs}',
              compact: '{spaceScaledXxxs}'
            },
            spaceCalendarGridFocusOutlineGutter: {
              comfortable: '-5px',
              compact: '-5px'
            },
            spaceCalendarGridSelectedFocusOutlineGutter: {
              comfortable: '{spaceCalendarGridFocusOutlineGutter}',
              compact: '{spaceCalendarGridFocusOutlineGutter}'
            },
            spaceCalendarGridGutter: {
              comfortable: '6px',
              compact: '6px'
            },
            spaceCardHorizontal: {
              comfortable: '{spaceContainerHorizontal}',
              compact: '{spaceContainerHorizontal}'
            },
            spaceCardVertical: {
              comfortable: '{spaceScaledM}',
              compact: '{spaceScaledM}'
            },
            spaceCodeEditorStatusFocusOutlineGutter: {
              comfortable: '-7px',
              compact: '-7px'
            },
            spaceContainerContentTop: {
              comfortable: '{spaceXxs}',
              compact: '{spaceXxs}'
            },
            spaceContainerHeaderTop: {
              comfortable: '{spaceS}',
              compact: '{spaceS}'
            },
            spaceContainerHeaderBottom: {
              comfortable: '{spaceScaledXs}',
              compact: '{spaceScaledXs}'
            },
            spaceContainerHorizontal: {
              comfortable: '{spaceL}',
              compact: '{spaceL}'
            },
            spaceContentHeaderPaddingBottom: {
              comfortable: '{spaceScaledM}',
              compact: '{spaceScaledM}'
            },
            spaceDarkHeaderOverlapDistance: {
              comfortable: '36px',
              compact: '32px'
            },
            spaceExpandableSectionIconOffsetTop: {
              comfortable: '{spaceScaled2xXxs}',
              compact: '{spaceScaled2xXxs}'
            },
            spaceFieldHorizontal: {
              comfortable: '{spaceS}',
              compact: '{spaceS}'
            },
            spaceFieldIconOffset: {
              comfortable: '36px',
              compact: '36px'
            },
            spaceFilteringTokenDismissButtonFocusOutlineGutter: {
              comfortable: '-5px',
              compact: '-5px'
            },
            spaceFilteringTokenOperationSelectFocusOutlineGutter: {
              comfortable: '-5px',
              compact: '-5px'
            },
            spaceFlashbarActionLeft: {
              comfortable: '{spaceS}',
              compact: '{spaceS}'
            },
            spaceFlashbarDismissRight: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceFlashbarHorizontal: {
              comfortable: '{spaceM}',
              compact: '{spaceM}'
            },
            spaceGridGutter: {
              comfortable: '{spaceL}',
              compact: '{spaceM}'
            },
            spaceKeyValueGap: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceLayoutContentBottom: {
              comfortable: '{spaceScaled2xXxxl}',
              compact: '{spaceScaled2xXxxl}'
            },
            spaceLayoutContentHorizontal: {
              comfortable: '{spaceScaled2xXl}',
              compact: '{spaceScaled2xXl}'
            },
            spaceLayoutToggleDiameter: {
              comfortable: '36px',
              compact: '36px'
            },
            spaceLayoutTogglePadding: {
              comfortable: '{spaceStaticS}',
              compact: '{spaceStaticS}'
            },
            spaceModalContentBottom: {
              comfortable: '{spaceScaled2xM}',
              compact: '{spaceScaled2xM}'
            },
            spaceModalHorizontal: {
              comfortable: '{spaceContainerHorizontal}',
              compact: '{spaceContainerHorizontal}'
            },
            spaceOptionIconBigTop: {
              comfortable: '0px',
              compact: '0px'
            },
            spacePanelContentBottom: {
              comfortable: '{spaceScaledXxxl}',
              compact: '{spaceScaledXxxl}'
            },
            spacePanelContentTop: {
              comfortable: '{spaceScaledL}',
              compact: '{spaceScaledL}'
            },
            spacePanelDividerMarginHorizontal: {
              comfortable: '{spaceXs}',
              compact: '{spaceXs}'
            },
            spacePanelHeaderVertical: {
              comfortable: '{spaceScaledL}',
              compact: '{spaceScaledL}'
            },
            spacePanelNavLeft: {
              comfortable: '28px',
              compact: '28px'
            },
            spacePanelSideLeft: {
              comfortable: '28px',
              compact: '28px'
            },
            spacePanelSideRight: {
              comfortable: '{spaceScaledXl}',
              compact: '{spaceScaledXl}'
            },
            spacePanelSplitTop: {
              comfortable: '{spaceScaledL}',
              compact: '{spaceScaledL}'
            },
            spacePanelSplitBottom: {
              comfortable: '{spaceScaledL}',
              compact: '{spaceScaledL}'
            },
            spaceSegmentedControlFocusOutlineGutter: {
              comfortable: '4px',
              compact: '4px'
            },
            spaceTabsContentTop: {
              comfortable: '{spaceScaledS}',
              compact: '{spaceScaledS}'
            },
            spaceTabsFocusOutlineGutter: {
              comfortable: '-8px',
              compact: '-8px'
            },
            spaceTableContentBottom: {
              comfortable: '{spaceXxs}',
              compact: '{spaceXxs}'
            },
            spaceTableEmbeddedHeaderTop: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceTableFooterHorizontal: {
              comfortable: '{spaceTableHeaderHorizontal}',
              compact: '{spaceTableHeaderHorizontal}'
            },
            spaceTableHeaderFocusOutlineGutter: {
              comfortable: '0px',
              compact: '-1px'
            },
            spaceTableHeaderHorizontal: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceTableHeaderToolsBottom: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceTableHeaderToolsFullPageBottom: {
              comfortable: '4px',
              compact: '4px'
            },
            spaceTableHorizontal: {
              comfortable: '{spaceContainerHorizontal}',
              compact: '{spaceContainerHorizontal}'
            },
            spaceScaled2xNone: {
              comfortable: '{spaceNone}',
              compact: '{spaceNone}'
            },
            spaceScaled2xXxxs: {
              comfortable: '{spaceXxxs}',
              compact: '{spaceNone}'
            },
            spaceScaled2xXxs: {
              comfortable: '{spaceXxs}',
              compact: '{spaceNone}'
            },
            spaceScaled2xXs: {
              comfortable: '{spaceXs}',
              compact: '{spaceNone}'
            },
            spaceScaled2xS: {
              comfortable: '{spaceS}',
              compact: '{spaceXxs}'
            },
            spaceScaled2xM: {
              comfortable: '{spaceM}',
              compact: '{spaceXs}'
            },
            spaceScaled2xL: {
              comfortable: '{spaceL}',
              compact: '{spaceS}'
            },
            spaceScaled2xXl: {
              comfortable: '{spaceXl}',
              compact: '{spaceM}'
            },
            spaceScaled2xXxl: {
              comfortable: '{spaceXxl}',
              compact: '{spaceL}'
            },
            spaceScaled2xXxxl: {
              comfortable: '{spaceXxxl}',
              compact: '{spaceXl}'
            },
            spaceScaledNone: {
              comfortable: '{spaceNone}',
              compact: '{spaceNone}'
            },
            spaceScaledXxxs: {
              comfortable: '{spaceNone}',
              compact: '{spaceNone}'
            },
            spaceScaledXxs: {
              comfortable: '{spaceXxxs}',
              compact: '{spaceXxxs}'
            },
            spaceScaledXs: {
              comfortable: '{spaceXxs}',
              compact: '{spaceXxs}'
            },
            spaceScaledS: {
              comfortable: '{spaceXs}',
              compact: '{spaceXs}'
            },
            spaceScaledM: {
              comfortable: '{spaceS}',
              compact: '{spaceS}'
            },
            spaceScaledL: {
              comfortable: '{spaceM}',
              compact: '{spaceM}'
            },
            spaceScaledXl: {
              comfortable: '{spaceL}',
              compact: '{spaceL}'
            },
            spaceScaledXxl: {
              comfortable: '{spaceXl}',
              compact: '{spaceXl}'
            },
            spaceScaledXxxl: {
              comfortable: '{spaceXxl}',
              compact: '{spaceXxl}'
            },
            spaceStaticXxxs: {
              comfortable: '{spaceXxxs}',
              compact: '{spaceXxxs}'
            },
            spaceStaticXxs: {
              comfortable: '{spaceXxs}',
              compact: '{spaceXxs}'
            },
            spaceStaticXs: {
              comfortable: '{spaceXs}',
              compact: '{spaceXs}'
            },
            spaceStaticS: {
              comfortable: '{spaceS}',
              compact: '{spaceS}'
            },
            spaceStaticM: {
              comfortable: '{spaceM}',
              compact: '{spaceM}'
            },
            spaceStaticL: {
              comfortable: '{spaceL}',
              compact: '{spaceL}'
            },
            spaceStaticXl: {
              comfortable: '{spaceXl}',
              compact: '{spaceXl}'
            },
            spaceStaticXxl: {
              comfortable: '{spaceXxl}',
              compact: '{spaceXxl}'
            },
            spaceStaticXxxl: {
              comfortable: '{spaceXxxl}',
              compact: '{spaceXxxl}'
            },
            spaceNone: {
              comfortable: '0px',
              compact: '0px'
            },
            spaceXxxs: {
              comfortable: '2px',
              compact: '2px'
            },
            spaceXxs: {
              comfortable: '4px',
              compact: '4px'
            },
            spaceXs: {
              comfortable: '8px',
              compact: '8px'
            },
            spaceS: {
              comfortable: '12px',
              compact: '12px'
            },
            spaceM: {
              comfortable: '16px',
              compact: '16px'
            },
            spaceL: {
              comfortable: '20px',
              compact: '20px'
            },
            spaceXl: {
              comfortable: '24px',
              compact: '24px'
            },
            spaceXxl: {
              comfortable: '32px',
              compact: '32px'
            },
            spaceXxxl: {
              comfortable: '40px',
              compact: '40px'
            },
            sizeVerticalInput: {
              comfortable: '28px',
              compact: '28px'
            }
          }
        },
        'top-navigation': {
          id: 'top-navigation',
          selector: '.awsui-context-top-navigation',
          tokens: {
            colorGreyOpaque25: {
              light: 'rgba(255, 255, 255, 0.25)',
              dark: 'rgba(255, 255, 255, 0.25)'
            },
            colorGreyOpaque40: {
              light: 'rgba(0, 0, 0, 0.4)',
              dark: 'rgba(0, 0, 0, 0.4)'
            },
            colorGreyOpaque50: {
              light: 'rgba(0, 0, 0, 0.5)',
              dark: 'rgba(0, 0, 0, 0.5)'
            },
            colorGreyOpaque70: {
              light: 'rgba(0, 7, 22, 0.7)',
              dark: 'rgba(0, 7, 22, 0.7)'
            },
            colorGreyOpaque80: {
              light: 'rgba(22, 25, 31, 0.8)',
              dark: 'rgba(22, 25, 31, 0.8)'
            },
            colorGreyOpaque90: {
              light: 'rgba(242, 243, 243, 0.9)',
              dark: 'rgba(242, 243, 243, 0.9)'
            },
            colorGreyTransparent: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentHeavy: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentLight: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorBackgroundBadgeIcon: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBackgroundButtonLinkActive: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonLinkHover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonNormalActive: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonNormalDefault: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundButtonNormalDisabled: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundButtonNormalHover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonPrimaryActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundButtonPrimaryDefault: {
              light: '{colorBorderButtonNormalDefault}',
              dark: '{colorBorderButtonNormalDefault}'
            },
            colorBackgroundButtonPrimaryDisabled: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonPrimaryHover: {
              light: '{colorBorderButtonNormalHover}',
              dark: '{colorBorderButtonNormalHover}'
            },
            colorBackgroundCalendarCurrentDate: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCellShaded: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBackgroundCodeEditorGutterActiveLineError: {
              light: '{colorTextStatusError}',
              dark: '{colorTextStatusError}'
            },
            colorBackgroundCodeEditorGutterDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorLoading: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorPaneItemHover: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCodeEditorStatusBar: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundContainerContent: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundContainerHeader: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlChecked: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundControlDefault: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlDisabled: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemDefault: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundDropdownItemDimmed: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundDropdownItemFilterMatch: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemHover: {
              light: '{colorGrey850}',
              dark: '{colorGrey850}'
            },
            colorBackgroundDropdownItemSelected: {
              light: '{colorBackgroundItemSelected}',
              dark: '{colorBackgroundItemSelected}'
            },
            colorBackgroundHomeHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDefault: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundInputDisabled: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundItemSelected: {
              light: '{colorBlue900}',
              dark: '{colorBlue900}'
            },
            colorBackgroundLayoutMain: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundLayoutMobilePanel: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutPanelContent: {
              light: '{colorBackgroundContainerContent}',
              dark: '{colorBackgroundContainerContent}'
            },
            colorBackgroundLayoutPanelHover: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundLayoutToggleActive: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundLayoutToggleSelectedActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBackgroundModalOverlay: {
              light: '{colorGreyOpaque70}',
              dark: '{colorGreyOpaque70}'
            },
            colorBackgroundNotificationBlue: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorBackgroundNotificationGreen: {
              light: '{colorGreen600}',
              dark: '{colorGreen600}'
            },
            colorBackgroundNotificationGrey: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundNotificationRed: {
              light: '{colorRed600}',
              dark: '{colorRed600}'
            },
            colorBackgroundNotificationYellow: {
              light: '{colorYellow600}',
              dark: '{colorYellow600}'
            },
            colorBackgroundNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarActive: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarHover: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundPopover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundProgressBarContentDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundProgressBarContentInFlash: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBackgroundProgressBarLayoutDefault: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundProgressBarLayoutInFlash: {
              light: '{colorGreyOpaque25}',
              dark: '{colorGreyOpaque25}'
            },
            colorBackgroundSegmentActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSegmentDefault: {
              light: '{colorBackgroundButtonNormalDefault}',
              dark: '{colorBackgroundButtonNormalDefault}'
            },
            colorBackgroundSegmentDisabled: {
              light: '{colorBackgroundButtonNormalDisabled}',
              dark: '{colorBackgroundButtonNormalDisabled}'
            },
            colorBackgroundSegmentHover: {
              light: '{colorBackgroundSegmentDefault}',
              dark: '{colorBackgroundSegmentDefault}'
            },
            colorBackgroundSliderHandleDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSliderHandleActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBackgroundSliderTrack: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundSliderHandleRing: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundSliderErrorPressed: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBackgroundSliderWarningPressed: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorBackgroundStatusError: {
              light: '{colorRed900}',
              dark: '{colorRed900}'
            },
            colorBackgroundStatusInfo: {
              light: '{colorBlue900}',
              dark: '{colorBlue900}'
            },
            colorBackgroundStatusSuccess: {
              light: '{colorGreen900}',
              dark: '{colorGreen900}'
            },
            colorBackgroundStatusWarning: {
              light: '{colorYellow900}',
              dark: '{colorYellow900}'
            },
            colorBackgroundTableHeader: {
              light: '{colorBackgroundContainerHeader}',
              dark: '{colorBackgroundContainerHeader}'
            },
            colorBackgroundTilesDisabled: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundToggleCheckedDisabled: {
              light: '{colorBlue800}',
              dark: '{colorBlue800}'
            },
            colorBackgroundToggleDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderButtonNormalActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBorderButtonNormalDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderButtonNormalDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderButtonNormalHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBorderButtonPrimaryDisabled: {
              light: '{colorBackgroundButtonPrimaryDisabled}',
              dark: '{colorBackgroundButtonPrimaryDisabled}'
            },
            colorBorderCalendarGrid: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderCalendarGridSelectedFocusRing: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBorderCodeEditorAceActiveLineLightTheme: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderCodeEditorAceActiveLineDarkTheme: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorPaneItemHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderContainerDivider: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderContainerTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderControlChecked: {
              light: '{colorBackgroundControlChecked}',
              dark: '{colorBackgroundControlChecked}'
            },
            colorBorderControlDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderControlDisabled: {
              light: '{colorBackgroundControlDisabled}',
              dark: '{colorBackgroundControlDisabled}'
            },
            colorBorderDividerActive: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBorderDividerPanelBottom: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerPanelSide: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerSecondary: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderDropdownContainer: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownGroup: {
              light: '{colorBorderDropdownItemDefault}',
              dark: '{colorBorderDropdownItemDefault}'
            },
            colorBorderDropdownItemDefault: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDropdownItemHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownItemDimmedHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderDropdownItemSelected: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderDropdownItemTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderEditableCellHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderInputDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderInputDisabled: {
              light: '{colorBackgroundInputDisabled}',
              dark: '{colorBackgroundInputDisabled}'
            },
            colorBorderInputFocused: {
              light: '{colorBlue300}',
              dark: '{colorBlue300}'
            },
            colorBorderItemFocused: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderDropdownItemFocused: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderItemPlaceholder: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderItemSelected: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderLayout: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBorderNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderPanelHeader: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderPopover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderSegmentActive: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderSegmentDisabled: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentHover: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderStatusError: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBorderStatusInfo: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderStatusSuccess: {
              light: '{colorGreen500}',
              dark: '{colorGreen500}'
            },
            colorBorderStatusWarning: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorBorderDividerInteractiveDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderTabsDivider: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBorderTabsShadow: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorBorderTabsUnderline: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorBorderTilesDisabled: {
              light: '{colorBackgroundTilesDisabled}',
              dark: '{colorBackgroundTilesDisabled}'
            },
            colorBorderTutorial: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorForegroundControlDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorForegroundControlDisabled: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorShadowDefault: {
              light: '{colorGreyTransparentHeavy}',
              dark: '{colorGreyTransparentHeavy}'
            },
            colorShadowMedium: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorShadowSide: {
              light: '{colorGreyTransparentLight}',
              dark: '{colorGreyTransparentLight}'
            },
            colorStrokeChartLine: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorStrokeCodeEditorResizeHandler: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorStrokeCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorStrokeCodeEditorGutterActiveLineHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextAccent: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextBodyDefault: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextBodySecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextBreadcrumbCurrent: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorTextBreadcrumbIcon: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextButtonInlineIconDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextButtonNormalActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextButtonNormalDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextButtonNormalHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextLinkButtonNormalDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorTextLinkButtonNormalHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextLinkButtonNormalActive: {
              light: '{colorTextButtonNormalActive}',
              dark: '{colorTextButtonNormalActive}'
            },
            colorTextButtonPrimaryActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextCalendarDateHover: {
              light: '{colorTextDropdownItemDefault}',
              dark: '{colorTextDropdownItemDefault}'
            },
            colorTextCalendarDateSelected: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextCalendarMonth: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextCodeEditorGutterActiveLine: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextCodeEditorGutterDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextCodeEditorStatusBarDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextCodeEditorTabButtonError: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextColumnHeader: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextColumnSortingIcon: {
              light: '{colorTextColumnHeader}',
              dark: '{colorTextColumnHeader}'
            },
            colorTextControlDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextCounter: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextDisabledInlineEdit: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextDropdownFooter: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownGroupLabel: {
              light: '{colorTextGroupLabel}',
              dark: '{colorTextGroupLabel}'
            },
            colorTextDropdownItemDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextDropdownItemDimmed: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemFilterMatch: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextDropdownItemHighlighted: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextDropdownItemSecondary: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownItemSecondaryHover: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextEmpty: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionHover: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextExpandableSectionNavigationIconDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorTextInteractiveDefault}'
            },
            colorTextFormDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextFormLabel: {
              light: '{colorTextFormDefault}',
              dark: '{colorTextFormDefault}'
            },
            colorTextFormSecondary: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextGroupLabel: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextLabelGenAi: {
              light: '{colorPurple400}',
              dark: '{colorPurple400}'
            },
            colorTextHeadingDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextHeadingSecondary: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextHomeHeaderDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextHomeHeaderSecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextIconCaret: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextIconSubtle: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextInputDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextInputPlaceholder: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextInputPlaceholderDisabled: {
              light: '{colorTextInputDisabled}',
              dark: '{colorTextInputDisabled}'
            },
            colorTextInteractiveActive: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextInteractiveHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveInvertedDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveInvertedHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInverted: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLabel: {
              light: '{colorTextFormLabel}',
              dark: '{colorTextFormLabel}'
            },
            colorTextLayoutToggle: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLayoutToggleActive: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorTextLayoutToggleHover: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextLayoutToggleSelected: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLinkDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextLinkHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextLinkInvertedHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonUnderline: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextLinkButtonUnderlineHover: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextNotificationDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextNotificationStackBar: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextNotificationYellow: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextPaginationPageNumberActiveDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextPaginationPageNumberDefault: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextSegmentActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextSegmentDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextSegmentHover: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextSmall: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextStatusError: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorTextStatusInactive: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextStatusInfo: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextStatusSuccess: {
              light: '{colorGreen500}',
              dark: '{colorGreen500}'
            },
            colorTextStatusWarning: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorTextTopNavigationTitle: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBoardPlaceholderActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBoardPlaceholderHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDragPlaceholderActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorDragPlaceholderHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDropzoneBackgroundActive: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorDropzoneBackgroundHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDropzoneTextActive: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorDropzoneTextHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            }
          }
        },
        header: {
          id: 'header',
          selector: '.awsui-context-content-header',
          tokens: {
            shadowContainer: {
              light: '0px 1px 8px 2px rgba(0, 7, 22, 0.6)',
              dark: '0px 1px 8px 2px rgba(0, 7, 22, 0.6)'
            },
            shadowContainerStacked: {
              light:
                '0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)',
              dark: '0px 9px 8px -7px rgb(0 7 22 / 60%), 8px 0px 8px -7px rgb(0 7 22 / 60%), -8px 0px 8px -7px rgb(0 7 22 / 60%)'
            },
            shadowContainerActive: {
              light: '0px 1px 1px 1px #192534, 0px 6px 36px #00040c',
              dark: '0px 1px 1px 1px #192534, 0px 6px 36px #00040c'
            },
            shadowDropdown: {
              light: '0px 4px 20px 1px rgba(0, 4, 12, 1)',
              dark: '0px 4px 20px 1px rgba(0, 4, 12, 1)'
            },
            shadowDropup: {
              light: '{shadowDropdown}',
              dark: '{shadowDropdown}'
            },
            shadowFlashCollapsed: {
              light: '0px 4px 4px rgba(0, 0, 0, 0.25)',
              dark: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            },
            shadowFlashSticky: {
              light: '0px 4px 8px rgba(0, 7, 22, 0.10)',
              dark: '0px 4px 8px rgba(0, 7, 22, 0.5)'
            },
            shadowModal: {
              light: '{shadowDropdown}',
              dark: '{shadowDropdown}'
            },
            shadowPanel: {
              light: '0px 0px 0px 1px #b6bec9',
              dark: '0px 0px 0px 1px #414d5c'
            },
            shadowPanelToggle: {
              light: '0px 6px 12px 1px rgba(0, 7, 22, 0.12)',
              dark: '0px 6px 12px 1px rgba(0, 7, 22, 1)'
            },
            shadowPopover: {
              light: '{shadowDropdown}',
              dark: '{shadowDropdown}'
            },
            shadowSplitBottom: {
              light: '0px -36px 36px -36px rgba(0, 7, 22, 1)',
              dark: '0px -36px 36px -36px rgba(0, 7, 22, 1)'
            },
            shadowSplitSide: {
              light:
                '-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)',
              dark: '-1px 0px 1px 0px #192534, -36px 6px 36px -36px rgba(0, 7, 22, 1)'
            },
            shadowSticky: {
              light: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)',
              dark: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)'
            },
            shadowStickyEmbedded: {
              light:
                '0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)',
              dark: '0px 2px 0px 0px #414d5c, 0px 16px 16px -12px rgba(0, 7, 22, 1)'
            },
            shadowStickyColumnFirst: {
              light: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)',
              dark: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)'
            },
            shadowStickyColumnLast: {
              light: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)',
              dark: '0px 4px 8px 1px rgba(0, 7, 22, 0.5)'
            },
            colorGreyOpaque25: {
              light: 'rgba(255, 255, 255, 0.25)',
              dark: 'rgba(255, 255, 255, 0.25)'
            },
            colorGreyOpaque40: {
              light: 'rgba(0, 0, 0, 0.4)',
              dark: 'rgba(0, 0, 0, 0.4)'
            },
            colorGreyOpaque50: {
              light: 'rgba(0, 0, 0, 0.5)',
              dark: 'rgba(0, 0, 0, 0.5)'
            },
            colorGreyOpaque70: {
              light: 'rgba(0, 7, 22, 0.7)',
              dark: 'rgba(0, 7, 22, 0.7)'
            },
            colorGreyOpaque80: {
              light: 'rgba(22, 25, 31, 0.8)',
              dark: 'rgba(22, 25, 31, 0.8)'
            },
            colorGreyOpaque90: {
              light: 'rgba(242, 243, 243, 0.9)',
              dark: 'rgba(242, 243, 243, 0.9)'
            },
            colorGreyTransparent: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentHeavy: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentLight: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorBackgroundBadgeIcon: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBackgroundButtonLinkActive: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonLinkHover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonNormalActive: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonNormalDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundButtonNormalDisabled: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundButtonNormalHover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonPrimaryActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundButtonPrimaryDefault: {
              light: '{colorBorderButtonNormalDefault}',
              dark: '{colorBorderButtonNormalDefault}'
            },
            colorBackgroundButtonPrimaryDisabled: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonPrimaryHover: {
              light: '{colorBorderButtonNormalHover}',
              dark: '{colorBorderButtonNormalHover}'
            },
            colorBackgroundCalendarCurrentDate: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCellShaded: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBackgroundCodeEditorGutterActiveLineError: {
              light: '{colorTextStatusError}',
              dark: '{colorTextStatusError}'
            },
            colorBackgroundCodeEditorGutterDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorLoading: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorPaneItemHover: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCodeEditorStatusBar: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundContainerContent: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundContainerHeader: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlChecked: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundControlDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundControlDisabled: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundDropdownItemDimmed: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundDropdownItemFilterMatch: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemHover: {
              light: '{colorGrey850}',
              dark: '{colorGrey850}'
            },
            colorBackgroundDropdownItemSelected: {
              light: '{colorBackgroundItemSelected}',
              dark: '{colorBackgroundItemSelected}'
            },
            colorBackgroundHomeHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDisabled: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundItemSelected: {
              light: '{colorBlue900}',
              dark: '{colorBlue900}'
            },
            colorBackgroundLayoutMain: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutMobilePanel: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutPanelContent: {
              light: '{colorBackgroundContainerContent}',
              dark: '{colorBackgroundContainerContent}'
            },
            colorBackgroundLayoutPanelHover: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundLayoutToggleActive: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundLayoutToggleSelectedActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBackgroundModalOverlay: {
              light: '{colorGreyOpaque70}',
              dark: '{colorGreyOpaque70}'
            },
            colorBackgroundNotificationBlue: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorBackgroundNotificationGreen: {
              light: '{colorGreen600}',
              dark: '{colorGreen600}'
            },
            colorBackgroundNotificationGrey: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundNotificationRed: {
              light: '{colorRed600}',
              dark: '{colorRed600}'
            },
            colorBackgroundNotificationYellow: {
              light: '{colorYellow600}',
              dark: '{colorYellow600}'
            },
            colorBackgroundNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarActive: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarHover: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundPopover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundProgressBarContentDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundProgressBarContentInFlash: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBackgroundProgressBarLayoutDefault: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundProgressBarLayoutInFlash: {
              light: '{colorGreyOpaque25}',
              dark: '{colorGreyOpaque25}'
            },
            colorBackgroundSegmentActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSegmentDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundSegmentDisabled: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundSegmentHover: {
              light: '{colorBackgroundSegmentDefault}',
              dark: '{colorBackgroundSegmentDefault}'
            },
            colorBackgroundSliderHandleDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSliderHandleActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBackgroundSliderTrack: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundSliderHandleRing: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundSliderErrorPressed: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBackgroundSliderWarningPressed: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorBackgroundStatusError: {
              light: '{colorRed900}',
              dark: '{colorRed900}'
            },
            colorBackgroundStatusInfo: {
              light: '{colorBlue900}',
              dark: '{colorBlue900}'
            },
            colorBackgroundStatusSuccess: {
              light: '{colorGreen900}',
              dark: '{colorGreen900}'
            },
            colorBackgroundStatusWarning: {
              light: '{colorYellow900}',
              dark: '{colorYellow900}'
            },
            colorBackgroundTableHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundTilesDisabled: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundToggleCheckedDisabled: {
              light: '{colorBlue800}',
              dark: '{colorBlue800}'
            },
            colorBackgroundToggleDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderButtonNormalActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBorderButtonNormalDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderButtonNormalDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderButtonNormalHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBorderButtonPrimaryDisabled: {
              light: '{colorBackgroundButtonPrimaryDisabled}',
              dark: '{colorBackgroundButtonPrimaryDisabled}'
            },
            colorBorderCalendarGrid: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderCalendarGridSelectedFocusRing: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBorderCodeEditorAceActiveLineLightTheme: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderCodeEditorAceActiveLineDarkTheme: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorPaneItemHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderContainerDivider: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderContainerTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderControlChecked: {
              light: '{colorBackgroundControlChecked}',
              dark: '{colorBackgroundControlChecked}'
            },
            colorBorderControlDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderControlDisabled: {
              light: '{colorBackgroundControlDisabled}',
              dark: '{colorBackgroundControlDisabled}'
            },
            colorBorderDividerActive: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBorderDividerPanelBottom: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerPanelSide: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerSecondary: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderDropdownContainer: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownGroup: {
              light: '{colorBorderDropdownItemDefault}',
              dark: '{colorBorderDropdownItemDefault}'
            },
            colorBorderDropdownItemDefault: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDropdownItemHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownItemDimmedHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderDropdownItemSelected: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderDropdownItemTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderEditableCellHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderInputDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderInputDisabled: {
              light: '{colorBackgroundInputDisabled}',
              dark: '{colorBackgroundInputDisabled}'
            },
            colorBorderInputFocused: {
              light: '{colorBlue300}',
              dark: '{colorBlue300}'
            },
            colorBorderItemFocused: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderDropdownItemFocused: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderItemPlaceholder: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderItemSelected: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderLayout: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBorderNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderPanelHeader: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderPopover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderSegmentActive: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderSegmentDisabled: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentHover: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderStatusError: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBorderStatusInfo: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderStatusSuccess: {
              light: '{colorGreen500}',
              dark: '{colorGreen500}'
            },
            colorBorderStatusWarning: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorBorderDividerInteractiveDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderTabsDivider: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBorderTabsShadow: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorBorderTabsUnderline: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorBorderTilesDisabled: {
              light: '{colorBackgroundTilesDisabled}',
              dark: '{colorBackgroundTilesDisabled}'
            },
            colorBorderTutorial: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorForegroundControlDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorForegroundControlDisabled: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorShadowDefault: {
              light: '{colorGreyTransparentHeavy}',
              dark: '{colorGreyTransparentHeavy}'
            },
            colorShadowMedium: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorShadowSide: {
              light: '{colorGreyTransparentLight}',
              dark: '{colorGreyTransparentLight}'
            },
            colorStrokeChartLine: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorStrokeCodeEditorResizeHandler: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorStrokeCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorStrokeCodeEditorGutterActiveLineHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextAccent: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextBodyDefault: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextBodySecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextBreadcrumbCurrent: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorTextBreadcrumbIcon: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextButtonInlineIconDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextButtonNormalActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextButtonNormalDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextButtonNormalHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextLinkButtonNormalDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorTextLinkButtonNormalHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextLinkButtonNormalActive: {
              light: '{colorTextButtonNormalActive}',
              dark: '{colorTextButtonNormalActive}'
            },
            colorTextButtonPrimaryActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextCalendarDateHover: {
              light: '{colorTextDropdownItemDefault}',
              dark: '{colorTextDropdownItemDefault}'
            },
            colorTextCalendarDateSelected: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextCalendarMonth: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextCodeEditorGutterActiveLine: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextCodeEditorGutterDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextCodeEditorStatusBarDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextCodeEditorTabButtonError: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextColumnHeader: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextColumnSortingIcon: {
              light: '{colorTextColumnHeader}',
              dark: '{colorTextColumnHeader}'
            },
            colorTextControlDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextCounter: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextDisabledInlineEdit: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextDropdownFooter: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownGroupLabel: {
              light: '{colorTextGroupLabel}',
              dark: '{colorTextGroupLabel}'
            },
            colorTextDropdownItemDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextDropdownItemDimmed: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemFilterMatch: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextDropdownItemHighlighted: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextDropdownItemSecondary: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownItemSecondaryHover: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextEmpty: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionHover: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextExpandableSectionNavigationIconDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorTextInteractiveDefault}'
            },
            colorTextFormDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextFormLabel: {
              light: '{colorTextFormDefault}',
              dark: '{colorTextFormDefault}'
            },
            colorTextFormSecondary: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextGroupLabel: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextLabelGenAi: {
              light: '{colorPurple400}',
              dark: '{colorPurple400}'
            },
            colorTextHeadingDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextHeadingSecondary: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextHomeHeaderDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextHomeHeaderSecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextIconCaret: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextIconSubtle: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextInputDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextInputPlaceholder: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextInputPlaceholderDisabled: {
              light: '{colorTextInputDisabled}',
              dark: '{colorTextInputDisabled}'
            },
            colorTextInteractiveActive: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextInteractiveHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveInvertedDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveInvertedHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInverted: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLabel: {
              light: '{colorTextFormLabel}',
              dark: '{colorTextFormLabel}'
            },
            colorTextLayoutToggle: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLayoutToggleActive: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorTextLayoutToggleHover: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextLayoutToggleSelected: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLinkDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextLinkHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextLinkInvertedHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonUnderline: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextLinkButtonUnderlineHover: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextNotificationDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextNotificationStackBar: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextNotificationYellow: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextPaginationPageNumberActiveDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextPaginationPageNumberDefault: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextSegmentActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextSegmentDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextSegmentHover: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextSmall: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextStatusError: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorTextStatusInactive: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextStatusInfo: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextStatusSuccess: {
              light: '{colorGreen500}',
              dark: '{colorGreen500}'
            },
            colorTextStatusWarning: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorTextTopNavigationTitle: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBoardPlaceholderActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBoardPlaceholderHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDragPlaceholderActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorDragPlaceholderHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDropzoneBackgroundActive: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorDropzoneBackgroundHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDropzoneTextActive: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorDropzoneTextHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            }
          }
        },
        flashbar: {
          id: 'flashbar',
          selector: '.awsui-context-flashbar',
          tokens: {
            colorGreyOpaque25: {
              light: 'rgba(255, 255, 255, 0.25)',
              dark: 'rgba(255, 255, 255, 0.25)'
            },
            colorGreyOpaque40: {
              light: 'rgba(0, 0, 0, 0.4)',
              dark: 'rgba(0, 0, 0, 0.4)'
            },
            colorGreyOpaque50: {
              light: 'rgba(0, 0, 0, 0.5)',
              dark: 'rgba(0, 0, 0, 0.5)'
            },
            colorGreyOpaque70: {
              light: 'rgba(35, 47, 62, 0.7)',
              dark: 'rgba(0, 7, 22, 0.7)'
            },
            colorGreyOpaque80: {
              light: 'rgba(22, 25, 31, 0.8)',
              dark: 'rgba(22, 25, 31, 0.8)'
            },
            colorGreyOpaque90: {
              light: 'rgba(242, 243, 243, 0.9)',
              dark: 'rgba(242, 243, 243, 0.9)'
            },
            colorGreyTransparent: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentHeavy: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentLight: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorBackgroundBadgeIcon: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorBackgroundButtonLinkActive: {
              light: '{colorBlue200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonLinkHover: {
              light: '{colorBlue100}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonNormalActive: {
              light: 'rgba(0, 7, 22, 0.2)',
              dark: 'rgba(0, 7, 22, 0.2)'
            },
            colorBackgroundButtonNormalDefault: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundButtonNormalDisabled: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundButtonNormalHover: {
              light: 'rgba(0, 7, 22, 0.15)',
              dark: 'rgba(0, 7, 22, 0.15)'
            },
            colorBackgroundButtonPrimaryActive: {
              light: '{colorBlue800}',
              dark: '{colorBlue500}'
            },
            colorBackgroundButtonPrimaryDefault: {
              light: '{colorBorderButtonNormalDefault}',
              dark: '{colorBorderButtonNormalDefault}'
            },
            colorBackgroundButtonPrimaryDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonPrimaryHover: {
              light: '{colorBorderButtonNormalHover}',
              dark: '{colorBorderButtonNormalHover}'
            },
            colorBackgroundCalendarCurrentDate: {
              light: '{colorGrey150}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCellShaded: {
              light: '{colorGrey125}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey500}'
            },
            colorBackgroundCodeEditorGutterActiveLineError: {
              light: '{colorTextStatusError}',
              dark: '{colorTextStatusError}'
            },
            colorBackgroundCodeEditorGutterDefault: {
              light: '{colorGrey150}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorLoading: {
              light: '{colorGrey100}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorPaneItemHover: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCodeEditorStatusBar: {
              light: '{colorGrey150}',
              dark: '{colorGrey750}'
            },
            colorBackgroundContainerContent: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundContainerHeader: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlChecked: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundControlDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlDisabled: {
              light: '{colorGrey300}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey750}'
            },
            colorBackgroundDropdownItemDimmed: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundDropdownItemFilterMatch: {
              light: '{colorBlue100}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemHover: {
              light: '{colorGrey150}',
              dark: '{colorGrey850}'
            },
            colorBackgroundDropdownItemSelected: {
              light: '{colorBackgroundItemSelected}',
              dark: '{colorBackgroundItemSelected}'
            },
            colorBackgroundHomeHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundInputDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey750}'
            },
            colorBackgroundItemSelected: {
              light: '{colorBlue100}',
              dark: '{colorBlue900}'
            },
            colorBackgroundLayoutMain: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundLayoutMobilePanel: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutPanelContent: {
              light: '{colorBackgroundContainerContent}',
              dark: '{colorBackgroundContainerContent}'
            },
            colorBackgroundLayoutPanelHover: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundLayoutToggleActive: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundLayoutToggleSelectedActive: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedHover: {
              light: '{colorBlue700}',
              dark: '{colorBlue400}'
            },
            colorBackgroundModalOverlay: {
              light: '{colorGreyOpaque70}',
              dark: '{colorGreyOpaque70}'
            },
            colorBackgroundNotificationBlue: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorBackgroundNotificationGreen: {
              light: '{colorGreen600}',
              dark: '{colorGreen600}'
            },
            colorBackgroundNotificationGrey: {
              light: '{colorGrey600}',
              dark: '{colorGrey550}'
            },
            colorBackgroundNotificationRed: {
              light: '{colorRed600}',
              dark: '{colorRed600}'
            },
            colorBackgroundNotificationYellow: {
              light: '{colorYellow600}',
              dark: '{colorYellow600}'
            },
            colorBackgroundNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarActive: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarHover: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundPopover: {
              light: '{colorWhite}',
              dark: '{colorGrey750}'
            },
            colorBackgroundProgressBarContentDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundProgressBarContentInFlash: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBackgroundProgressBarLayoutDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundProgressBarLayoutInFlash: {
              light: '{colorGreyOpaque25}',
              dark: '{colorGreyOpaque25}'
            },
            colorBackgroundSegmentActive: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSegmentDefault: {
              light: '{colorBackgroundButtonNormalDefault}',
              dark: '{colorBackgroundButtonNormalDefault}'
            },
            colorBackgroundSegmentDisabled: {
              light: '{colorBackgroundButtonNormalDisabled}',
              dark: '{colorBackgroundButtonNormalDisabled}'
            },
            colorBackgroundSegmentHover: {
              light: '{colorBackgroundSegmentDefault}',
              dark: '{colorBackgroundSegmentDefault}'
            },
            colorBackgroundSliderHandleDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSliderHandleActive: {
              light: '{colorBlue700}',
              dark: '{colorBlue400}'
            },
            colorBackgroundSliderTrack: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBackgroundSliderHandleRing: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundSliderErrorPressed: {
              light: '{colorRed700}',
              dark: '{colorRed500}'
            },
            colorBackgroundSliderWarningPressed: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorBackgroundStatusError: {
              light: '{colorRed100}',
              dark: '{colorRed900}'
            },
            colorBackgroundStatusInfo: {
              light: '{colorBlue100}',
              dark: '{colorBlue900}'
            },
            colorBackgroundStatusSuccess: {
              light: '{colorGreen100}',
              dark: '{colorGreen900}'
            },
            colorBackgroundStatusWarning: {
              light: '{colorYellow100}',
              dark: '{colorYellow900}'
            },
            colorBackgroundTableHeader: {
              light: '{colorBackgroundContainerHeader}',
              dark: '{colorBackgroundContainerHeader}'
            },
            colorBackgroundTilesDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey750}'
            },
            colorBackgroundToggleCheckedDisabled: {
              light: '{colorBlue300}',
              dark: '{colorBlue800}'
            },
            colorBackgroundToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey500}'
            },
            colorBorderButtonNormalActive: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBorderButtonNormalDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderButtonNormalDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderButtonNormalHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBorderButtonPrimaryDisabled: {
              light: '{colorBackgroundButtonPrimaryDisabled}',
              dark: '{colorBackgroundButtonPrimaryDisabled}'
            },
            colorBorderCalendarGrid: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderCalendarGridSelectedFocusRing: {
              light: '{colorGrey100}',
              dark: '{colorGrey800}'
            },
            colorBorderCodeEditorAceActiveLineLightTheme: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderCodeEditorAceActiveLineDarkTheme: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorPaneItemHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderContainerDivider: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderContainerTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderControlChecked: {
              light: '{colorBackgroundControlChecked}',
              dark: '{colorBackgroundControlChecked}'
            },
            colorBorderControlDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderControlDisabled: {
              light: '{colorBackgroundControlDisabled}',
              dark: '{colorBackgroundControlDisabled}'
            },
            colorBorderDividerActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerPanelBottom: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerPanelSide: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerSecondary: {
              light: '{colorGrey200}',
              dark: '{colorGrey700}'
            },
            colorBorderDropdownContainer: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownGroup: {
              light: '{colorBorderDropdownItemDefault}',
              dark: '{colorBorderDropdownItemDefault}'
            },
            colorBorderDropdownItemDefault: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDropdownItemHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownItemDimmedHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderDropdownItemSelected: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderDropdownItemTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderEditableCellHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderInputDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBorderInputDisabled: {
              light: '{colorBackgroundInputDisabled}',
              dark: '{colorBackgroundInputDisabled}'
            },
            colorBorderInputFocused: {
              light: '{colorBlue800}',
              dark: '{colorBlue300}'
            },
            colorBorderItemFocused: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderDropdownItemFocused: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorBorderItemPlaceholder: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderItemSelected: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBorderLayout: {
              light: '{colorGrey300}',
              dark: '{colorGrey650}'
            },
            colorBorderNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderPanelHeader: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderPopover: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderSegmentActive: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorBorderSegmentDisabled: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentHover: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderStatusError: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorBorderStatusInfo: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBorderStatusSuccess: {
              light: '{colorGreen600}',
              dark: '{colorGreen500}'
            },
            colorBorderStatusWarning: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorBorderDividerInteractiveDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey300}'
            },
            colorBorderTabsDivider: {
              light: '{colorGrey350}',
              dark: '{colorGrey600}'
            },
            colorBorderTabsShadow: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorBorderTabsUnderline: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorBorderTilesDisabled: {
              light: '{colorBackgroundTilesDisabled}',
              dark: '{colorBackgroundTilesDisabled}'
            },
            colorBorderTutorial: {
              light: '{colorGrey300}',
              dark: '{colorGrey600}'
            },
            colorForegroundControlDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorForegroundControlDisabled: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorShadowDefault: {
              light: '{colorGreyTransparentHeavy}',
              dark: '{colorGreyTransparentHeavy}'
            },
            colorShadowMedium: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorShadowSide: {
              light: '{colorGreyTransparentLight}',
              dark: '{colorGreyTransparentLight}'
            },
            colorStrokeChartLine: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorStrokeCodeEditorResizeHandler: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorStrokeCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey750}'
            },
            colorStrokeCodeEditorGutterActiveLineHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey900}'
            },
            colorTextAccent: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextBodyDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextBodySecondary: {
              light: '{colorGrey600}',
              dark: '{colorGrey350}'
            },
            colorTextBreadcrumbCurrent: {
              light: '{colorGrey550}',
              dark: '{colorGrey500}'
            },
            colorTextBreadcrumbIcon: {
              light: '{colorGrey500}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextButtonInlineIconDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextButtonNormalActive: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextButtonNormalDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextButtonNormalHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonNormalDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorTextLinkButtonNormalHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextLinkButtonNormalActive: {
              light: '{colorTextButtonNormalActive}',
              dark: '{colorTextButtonNormalActive}'
            },
            colorTextButtonPrimaryActive: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryHover: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextCalendarDateHover: {
              light: '{colorTextDropdownItemDefault}',
              dark: '{colorTextDropdownItemDefault}'
            },
            colorTextCalendarDateSelected: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextCalendarMonth: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextCodeEditorGutterActiveLine: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextCodeEditorGutterDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextCodeEditorStatusBarDisabled: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorTextCodeEditorTabButtonError: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextColumnHeader: {
              light: '{colorGrey600}',
              dark: '{colorGrey400}'
            },
            colorTextColumnSortingIcon: {
              light: '{colorTextColumnHeader}',
              dark: '{colorTextColumnHeader}'
            },
            colorTextControlDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextCounter: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextDisabledInlineEdit: {
              light: '{colorGrey600}',
              dark: '{colorGrey400}'
            },
            colorTextDropdownFooter: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownGroupLabel: {
              light: '{colorTextGroupLabel}',
              dark: '{colorTextGroupLabel}'
            },
            colorTextDropdownItemDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextDropdownItemDimmed: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemFilterMatch: {
              light: '{colorBlue600}',
              dark: '{colorBlue400}'
            },
            colorTextDropdownItemHighlighted: {
              light: '{colorGrey900}',
              dark: '{colorGrey200}'
            },
            colorTextDropdownItemSecondary: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownItemSecondaryHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey300}'
            },
            colorTextEmpty: {
              light: '{colorGrey550}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextExpandableSectionHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextExpandableSectionNavigationIconDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorTextInteractiveDefault}'
            },
            colorTextFormDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextFormLabel: {
              light: '{colorTextFormDefault}',
              dark: '{colorTextFormDefault}'
            },
            colorTextFormSecondary: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextGroupLabel: {
              light: '{colorGrey600}',
              dark: '{colorGrey350}'
            },
            colorTextLabelGenAi: {
              light: '{colorPurple600}',
              dark: '{colorPurple400}'
            },
            colorTextHeadingDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextHeadingSecondary: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextHomeHeaderDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextHomeHeaderSecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextIconCaret: {
              light: '{colorGrey500}',
              dark: '{colorGrey450}'
            },
            colorTextIconSubtle: {
              light: '{colorGrey550}',
              dark: '{colorGrey400}'
            },
            colorTextInputDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextInputPlaceholder: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextInputPlaceholderDisabled: {
              light: '{colorTextInputDisabled}',
              dark: '{colorTextInputDisabled}'
            },
            colorTextInteractiveActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextInteractiveHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveInvertedDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveInvertedHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInverted: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextLabel: {
              light: '{colorTextFormLabel}',
              dark: '{colorTextFormLabel}'
            },
            colorTextLayoutToggle: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLayoutToggleActive: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorTextLayoutToggleHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextLayoutToggleSelected: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextLinkDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextLinkHover: {
              light: '{colorBlue800}',
              dark: '{colorBlue400}'
            },
            colorTextLinkInvertedHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonUnderline: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextLinkButtonUnderlineHover: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextNotificationDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextNotificationStackBar: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextNotificationYellow: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextPaginationPageNumberActiveDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextPaginationPageNumberDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorGrey400}'
            },
            colorTextSegmentActive: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextSegmentDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextSegmentHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextSmall: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextStatusError: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorTextStatusInactive: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextStatusInfo: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextStatusSuccess: {
              light: '{colorGreen600}',
              dark: '{colorGreen500}'
            },
            colorTextStatusWarning: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorTextTopNavigationTitle: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorBoardPlaceholderActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey550}'
            },
            colorBoardPlaceholderHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDragPlaceholderActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey550}'
            },
            colorDragPlaceholderHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDropzoneBackgroundActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey500}'
            },
            colorDropzoneBackgroundHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDropzoneTextActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey800}'
            },
            colorDropzoneTextHover: {
              light: '{colorBlue800}',
              dark: '{colorWhite}'
            }
          }
        },
        'flashbar-warning': {
          id: 'flashbar-warning',
          selector: '.awsui-context-flashbar-warning',
          tokens: {
            colorGreyOpaque25: {
              light: 'rgba(255, 255, 255, 0.25)',
              dark: 'rgba(255, 255, 255, 0.25)'
            },
            colorGreyOpaque40: {
              light: 'rgba(0, 0, 0, 0.4)',
              dark: 'rgba(0, 0, 0, 0.4)'
            },
            colorGreyOpaque50: {
              light: 'rgba(0, 0, 0, 0.5)',
              dark: 'rgba(0, 0, 0, 0.5)'
            },
            colorGreyOpaque70: {
              light: 'rgba(35, 47, 62, 0.7)',
              dark: 'rgba(0, 7, 22, 0.7)'
            },
            colorGreyOpaque80: {
              light: 'rgba(22, 25, 31, 0.8)',
              dark: 'rgba(22, 25, 31, 0.8)'
            },
            colorGreyOpaque90: {
              light: 'rgba(242, 243, 243, 0.9)',
              dark: 'rgba(242, 243, 243, 0.9)'
            },
            colorGreyTransparent: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentHeavy: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentLight: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorBackgroundBadgeIcon: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorBackgroundButtonLinkActive: {
              light: '{colorBlue200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonLinkHover: {
              light: '{colorBlue100}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonNormalActive: {
              light: 'rgba(0, 7, 22, 0.1)',
              dark: 'rgba(0, 7, 22, 0.1)'
            },
            colorBackgroundButtonNormalDefault: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundButtonNormalDisabled: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundButtonNormalHover: {
              light: 'rgba(0, 7, 22, 0.05)',
              dark: 'rgba(0, 7, 22, 0.05)'
            },
            colorBackgroundButtonPrimaryActive: {
              light: '{colorBlue800}',
              dark: '{colorBlue500}'
            },
            colorBackgroundButtonPrimaryDefault: {
              light: '{colorBorderButtonNormalDefault}',
              dark: '{colorBorderButtonNormalDefault}'
            },
            colorBackgroundButtonPrimaryDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonPrimaryHover: {
              light: '{colorBorderButtonNormalHover}',
              dark: '{colorBorderButtonNormalHover}'
            },
            colorBackgroundCalendarCurrentDate: {
              light: '{colorGrey150}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCellShaded: {
              light: '{colorGrey125}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey500}'
            },
            colorBackgroundCodeEditorGutterActiveLineError: {
              light: '{colorTextStatusError}',
              dark: '{colorTextStatusError}'
            },
            colorBackgroundCodeEditorGutterDefault: {
              light: '{colorGrey150}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorLoading: {
              light: '{colorGrey100}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorPaneItemHover: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCodeEditorStatusBar: {
              light: '{colorGrey150}',
              dark: '{colorGrey750}'
            },
            colorBackgroundContainerContent: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundContainerHeader: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlChecked: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundControlDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlDisabled: {
              light: '{colorGrey300}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey750}'
            },
            colorBackgroundDropdownItemDimmed: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundDropdownItemFilterMatch: {
              light: '{colorBlue100}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemHover: {
              light: '{colorGrey150}',
              dark: '{colorGrey850}'
            },
            colorBackgroundDropdownItemSelected: {
              light: '{colorBackgroundItemSelected}',
              dark: '{colorBackgroundItemSelected}'
            },
            colorBackgroundHomeHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundInputDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey750}'
            },
            colorBackgroundItemSelected: {
              light: '{colorBlue100}',
              dark: '{colorBlue900}'
            },
            colorBackgroundLayoutMain: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundLayoutMobilePanel: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutPanelContent: {
              light: '{colorBackgroundContainerContent}',
              dark: '{colorBackgroundContainerContent}'
            },
            colorBackgroundLayoutPanelHover: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundLayoutToggleActive: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundLayoutToggleSelectedActive: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedHover: {
              light: '{colorBlue700}',
              dark: '{colorBlue400}'
            },
            colorBackgroundModalOverlay: {
              light: '{colorGreyOpaque70}',
              dark: '{colorGreyOpaque70}'
            },
            colorBackgroundNotificationBlue: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorBackgroundNotificationGreen: {
              light: '{colorGreen600}',
              dark: '{colorGreen600}'
            },
            colorBackgroundNotificationGrey: {
              light: '{colorGrey600}',
              dark: '{colorGrey550}'
            },
            colorBackgroundNotificationRed: {
              light: '{colorRed600}',
              dark: '{colorRed600}'
            },
            colorBackgroundNotificationYellow: {
              light: '{colorYellow600}',
              dark: '{colorYellow600}'
            },
            colorBackgroundNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarActive: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarHover: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundPopover: {
              light: '{colorWhite}',
              dark: '{colorGrey750}'
            },
            colorBackgroundProgressBarContentDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundProgressBarContentInFlash: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBackgroundProgressBarLayoutDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundProgressBarLayoutInFlash: {
              light: '{colorGreyOpaque25}',
              dark: '{colorGreyOpaque25}'
            },
            colorBackgroundSegmentActive: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSegmentDefault: {
              light: '{colorBackgroundButtonNormalDefault}',
              dark: '{colorBackgroundButtonNormalDefault}'
            },
            colorBackgroundSegmentDisabled: {
              light: '{colorBackgroundButtonNormalDisabled}',
              dark: '{colorBackgroundButtonNormalDisabled}'
            },
            colorBackgroundSegmentHover: {
              light: '{colorBackgroundSegmentDefault}',
              dark: '{colorBackgroundSegmentDefault}'
            },
            colorBackgroundSliderHandleDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSliderHandleActive: {
              light: '{colorBlue700}',
              dark: '{colorBlue400}'
            },
            colorBackgroundSliderTrack: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBackgroundSliderHandleRing: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundSliderErrorPressed: {
              light: '{colorRed700}',
              dark: '{colorRed500}'
            },
            colorBackgroundSliderWarningPressed: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorBackgroundStatusError: {
              light: '{colorRed100}',
              dark: '{colorRed900}'
            },
            colorBackgroundStatusInfo: {
              light: '{colorBlue100}',
              dark: '{colorBlue900}'
            },
            colorBackgroundStatusSuccess: {
              light: '{colorGreen100}',
              dark: '{colorGreen900}'
            },
            colorBackgroundStatusWarning: {
              light: '{colorYellow100}',
              dark: '{colorYellow900}'
            },
            colorBackgroundTableHeader: {
              light: '{colorBackgroundContainerHeader}',
              dark: '{colorBackgroundContainerHeader}'
            },
            colorBackgroundTilesDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey750}'
            },
            colorBackgroundToggleCheckedDisabled: {
              light: '{colorBlue300}',
              dark: '{colorBlue800}'
            },
            colorBackgroundToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey500}'
            },
            colorBorderButtonNormalActive: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorBorderButtonNormalDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorBorderButtonNormalDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderButtonNormalHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorBorderButtonPrimaryDisabled: {
              light: '{colorBackgroundButtonPrimaryDisabled}',
              dark: '{colorBackgroundButtonPrimaryDisabled}'
            },
            colorBorderCalendarGrid: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderCalendarGridSelectedFocusRing: {
              light: '{colorGrey100}',
              dark: '{colorGrey800}'
            },
            colorBorderCodeEditorAceActiveLineLightTheme: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderCodeEditorAceActiveLineDarkTheme: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorPaneItemHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderContainerDivider: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderContainerTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderControlChecked: {
              light: '{colorBackgroundControlChecked}',
              dark: '{colorBackgroundControlChecked}'
            },
            colorBorderControlDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderControlDisabled: {
              light: '{colorBackgroundControlDisabled}',
              dark: '{colorBackgroundControlDisabled}'
            },
            colorBorderDividerActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerDefault: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorBorderDividerPanelBottom: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerPanelSide: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerSecondary: {
              light: '{colorGrey200}',
              dark: '{colorGrey700}'
            },
            colorBorderDropdownContainer: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownGroup: {
              light: '{colorBorderDropdownItemDefault}',
              dark: '{colorBorderDropdownItemDefault}'
            },
            colorBorderDropdownItemDefault: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDropdownItemHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownItemDimmedHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderDropdownItemSelected: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderDropdownItemTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderEditableCellHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderInputDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBorderInputDisabled: {
              light: '{colorBackgroundInputDisabled}',
              dark: '{colorBackgroundInputDisabled}'
            },
            colorBorderInputFocused: {
              light: '{colorBlue800}',
              dark: '{colorBlue300}'
            },
            colorBorderItemFocused: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorBorderDropdownItemFocused: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorBorderItemPlaceholder: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderItemSelected: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBorderLayout: {
              light: '{colorGrey300}',
              dark: '{colorGrey650}'
            },
            colorBorderNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderPanelHeader: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderPopover: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderSegmentActive: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorBorderSegmentDisabled: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentHover: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderStatusError: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorBorderStatusInfo: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBorderStatusSuccess: {
              light: '{colorGreen600}',
              dark: '{colorGreen500}'
            },
            colorBorderStatusWarning: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorBorderDividerInteractiveDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey300}'
            },
            colorBorderTabsDivider: {
              light: '{colorGrey350}',
              dark: '{colorGrey600}'
            },
            colorBorderTabsShadow: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorBorderTabsUnderline: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorBorderTilesDisabled: {
              light: '{colorBackgroundTilesDisabled}',
              dark: '{colorBackgroundTilesDisabled}'
            },
            colorBorderTutorial: {
              light: '{colorGrey300}',
              dark: '{colorGrey600}'
            },
            colorForegroundControlDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorForegroundControlDisabled: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorShadowDefault: {
              light: '{colorGreyTransparentHeavy}',
              dark: '{colorGreyTransparentHeavy}'
            },
            colorShadowMedium: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorShadowSide: {
              light: '{colorGreyTransparentLight}',
              dark: '{colorGreyTransparentLight}'
            },
            colorStrokeChartLine: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorStrokeCodeEditorResizeHandler: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorStrokeCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey750}'
            },
            colorStrokeCodeEditorGutterActiveLineHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey900}'
            },
            colorTextAccent: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextBodyDefault: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorTextBodySecondary: {
              light: '{colorGrey600}',
              dark: '{colorGrey350}'
            },
            colorTextBreadcrumbCurrent: {
              light: '{colorGrey550}',
              dark: '{colorGrey500}'
            },
            colorTextBreadcrumbIcon: {
              light: '{colorGrey500}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextButtonInlineIconDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextButtonNormalActive: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextButtonNormalDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorTextButtonNormalHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLinkButtonNormalDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextLinkButtonNormalHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextLinkButtonNormalActive: {
              light: '{colorTextButtonNormalActive}',
              dark: '{colorTextButtonNormalActive}'
            },
            colorTextButtonPrimaryActive: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryHover: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextCalendarDateHover: {
              light: '{colorTextDropdownItemDefault}',
              dark: '{colorTextDropdownItemDefault}'
            },
            colorTextCalendarDateSelected: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextCalendarMonth: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextCodeEditorGutterActiveLine: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextCodeEditorGutterDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextCodeEditorStatusBarDisabled: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorTextCodeEditorTabButtonError: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextColumnHeader: {
              light: '{colorGrey600}',
              dark: '{colorGrey400}'
            },
            colorTextColumnSortingIcon: {
              light: '{colorTextColumnHeader}',
              dark: '{colorTextColumnHeader}'
            },
            colorTextControlDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextCounter: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextDisabledInlineEdit: {
              light: '{colorGrey600}',
              dark: '{colorGrey400}'
            },
            colorTextDropdownFooter: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownGroupLabel: {
              light: '{colorTextGroupLabel}',
              dark: '{colorTextGroupLabel}'
            },
            colorTextDropdownItemDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextDropdownItemDimmed: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemFilterMatch: {
              light: '{colorBlue600}',
              dark: '{colorBlue400}'
            },
            colorTextDropdownItemHighlighted: {
              light: '{colorGrey900}',
              dark: '{colorGrey200}'
            },
            colorTextDropdownItemSecondary: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownItemSecondaryHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey300}'
            },
            colorTextEmpty: {
              light: '{colorGrey550}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionDefault: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorTextExpandableSectionHover: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorTextExpandableSectionNavigationIconDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorTextInteractiveDefault}'
            },
            colorTextFormDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextFormLabel: {
              light: '{colorTextFormDefault}',
              dark: '{colorTextFormDefault}'
            },
            colorTextFormSecondary: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextGroupLabel: {
              light: '{colorGrey600}',
              dark: '{colorGrey350}'
            },
            colorTextLabelGenAi: {
              light: '{colorPurple600}',
              dark: '{colorPurple400}'
            },
            colorTextHeadingDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextHeadingSecondary: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorTextHomeHeaderDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextHomeHeaderSecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextIconCaret: {
              light: '{colorGrey500}',
              dark: '{colorGrey450}'
            },
            colorTextIconSubtle: {
              light: '{colorGrey550}',
              dark: '{colorGrey400}'
            },
            colorTextInputDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextInputPlaceholder: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextInputPlaceholderDisabled: {
              light: '{colorTextInputDisabled}',
              dark: '{colorTextInputDisabled}'
            },
            colorTextInteractiveActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextInteractiveHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveInvertedDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorTextInteractiveInvertedHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextInverted: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextLabel: {
              light: '{colorTextFormLabel}',
              dark: '{colorTextFormLabel}'
            },
            colorTextLayoutToggle: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLayoutToggleActive: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorTextLayoutToggleHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextLayoutToggleSelected: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextLinkDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextLinkHover: {
              light: '{colorBlue800}',
              dark: '{colorBlue400}'
            },
            colorTextLinkInvertedHover: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorTextLinkButtonUnderline: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextLinkButtonUnderlineHover: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextNotificationDefault: {
              light: '{colorTextNotificationYellow}',
              dark: '{colorTextNotificationYellow}'
            },
            colorTextNotificationStackBar: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextNotificationYellow: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextPaginationPageNumberActiveDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextPaginationPageNumberDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorGrey400}'
            },
            colorTextSegmentActive: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextSegmentDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextSegmentHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextSmall: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextStatusError: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorTextStatusInactive: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextStatusInfo: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextStatusSuccess: {
              light: '{colorGreen600}',
              dark: '{colorGreen500}'
            },
            colorTextStatusWarning: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorTextTopNavigationTitle: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorBoardPlaceholderActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey550}'
            },
            colorBoardPlaceholderHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDragPlaceholderActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey550}'
            },
            colorDragPlaceholderHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDropzoneBackgroundActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey500}'
            },
            colorDropzoneBackgroundHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDropzoneTextActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey800}'
            },
            colorDropzoneTextHover: {
              light: '{colorBlue800}',
              dark: '{colorWhite}'
            }
          }
        },
        alert: {
          id: 'alert',
          selector: '.awsui-context-alert',
          tokens: {
            colorGreyOpaque25: {
              light: 'rgba(255, 255, 255, 0.25)',
              dark: 'rgba(255, 255, 255, 0.25)'
            },
            colorGreyOpaque40: {
              light: 'rgba(0, 0, 0, 0.4)',
              dark: 'rgba(0, 0, 0, 0.4)'
            },
            colorGreyOpaque50: {
              light: 'rgba(0, 0, 0, 0.5)',
              dark: 'rgba(0, 0, 0, 0.5)'
            },
            colorGreyOpaque70: {
              light: 'rgba(35, 47, 62, 0.7)',
              dark: 'rgba(0, 7, 22, 0.7)'
            },
            colorGreyOpaque80: {
              light: 'rgba(22, 25, 31, 0.8)',
              dark: 'rgba(22, 25, 31, 0.8)'
            },
            colorGreyOpaque90: {
              light: 'rgba(242, 243, 243, 0.9)',
              dark: 'rgba(242, 243, 243, 0.9)'
            },
            colorGreyTransparent: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentHeavy: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentLight: {
              light: 'rgba(0, 7, 22, 0.12)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorBackgroundBadgeIcon: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorBackgroundButtonLinkActive: {
              light: '{colorBlue200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonLinkHover: {
              light: '{colorBlue100}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonNormalActive: {
              light: 'rgba(0, 7, 22, 0.1)',
              dark: 'rgba(255, 255, 255, 0.15)'
            },
            colorBackgroundButtonNormalDefault: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundButtonNormalDisabled: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundButtonNormalHover: {
              light: 'rgba(0, 7, 22, 0.05)',
              dark: 'rgba(255, 255, 255, 0.1)'
            },
            colorBackgroundButtonPrimaryActive: {
              light: '{colorBlue800}',
              dark: '{colorBlue500}'
            },
            colorBackgroundButtonPrimaryDefault: {
              light: '{colorBorderButtonNormalDefault}',
              dark: '{colorBorderButtonNormalDefault}'
            },
            colorBackgroundButtonPrimaryDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonPrimaryHover: {
              light: '{colorBorderButtonNormalHover}',
              dark: '{colorBorderButtonNormalHover}'
            },
            colorBackgroundCalendarCurrentDate: {
              light: '{colorGrey150}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCellShaded: {
              light: '{colorGrey125}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey500}'
            },
            colorBackgroundCodeEditorGutterActiveLineError: {
              light: '{colorTextStatusError}',
              dark: '{colorTextStatusError}'
            },
            colorBackgroundCodeEditorGutterDefault: {
              light: '{colorGrey150}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorLoading: {
              light: '{colorGrey100}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorPaneItemHover: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCodeEditorStatusBar: {
              light: '{colorGrey150}',
              dark: '{colorGrey750}'
            },
            colorBackgroundContainerContent: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundContainerHeader: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlChecked: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundControlDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlDisabled: {
              light: '{colorGrey300}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey750}'
            },
            colorBackgroundDropdownItemDimmed: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundDropdownItemFilterMatch: {
              light: '{colorBlue100}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemHover: {
              light: '{colorGrey150}',
              dark: '{colorGrey850}'
            },
            colorBackgroundDropdownItemSelected: {
              light: '{colorBackgroundItemSelected}',
              dark: '{colorBackgroundItemSelected}'
            },
            colorBackgroundHomeHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundInputDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey750}'
            },
            colorBackgroundItemSelected: {
              light: '{colorBlue100}',
              dark: '{colorBlue900}'
            },
            colorBackgroundLayoutMain: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundLayoutMobilePanel: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutPanelContent: {
              light: '{colorBackgroundContainerContent}',
              dark: '{colorBackgroundContainerContent}'
            },
            colorBackgroundLayoutPanelHover: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundLayoutToggleActive: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundLayoutToggleSelectedActive: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedHover: {
              light: '{colorBlue700}',
              dark: '{colorBlue400}'
            },
            colorBackgroundModalOverlay: {
              light: '{colorGreyOpaque70}',
              dark: '{colorGreyOpaque70}'
            },
            colorBackgroundNotificationBlue: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorBackgroundNotificationGreen: {
              light: '{colorGreen600}',
              dark: '{colorGreen600}'
            },
            colorBackgroundNotificationGrey: {
              light: '{colorGrey600}',
              dark: '{colorGrey550}'
            },
            colorBackgroundNotificationRed: {
              light: '{colorRed600}',
              dark: '{colorRed600}'
            },
            colorBackgroundNotificationYellow: {
              light: '{colorYellow600}',
              dark: '{colorYellow600}'
            },
            colorBackgroundNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarActive: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarHover: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundPopover: {
              light: '{colorWhite}',
              dark: '{colorGrey750}'
            },
            colorBackgroundProgressBarContentDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundProgressBarContentInFlash: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBackgroundProgressBarLayoutDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey650}'
            },
            colorBackgroundProgressBarLayoutInFlash: {
              light: '{colorGreyOpaque25}',
              dark: '{colorGreyOpaque25}'
            },
            colorBackgroundSegmentActive: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSegmentDefault: {
              light: '{colorBackgroundButtonNormalDefault}',
              dark: '{colorBackgroundButtonNormalDefault}'
            },
            colorBackgroundSegmentDisabled: {
              light: '{colorBackgroundButtonNormalDisabled}',
              dark: '{colorBackgroundButtonNormalDisabled}'
            },
            colorBackgroundSegmentHover: {
              light: '{colorBackgroundSegmentDefault}',
              dark: '{colorBackgroundSegmentDefault}'
            },
            colorBackgroundSliderHandleDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSliderHandleActive: {
              light: '{colorBlue700}',
              dark: '{colorBlue400}'
            },
            colorBackgroundSliderTrack: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBackgroundSliderHandleRing: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorBackgroundSliderErrorPressed: {
              light: '{colorRed700}',
              dark: '{colorRed500}'
            },
            colorBackgroundSliderWarningPressed: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorBackgroundStatusError: {
              light: '{colorRed100}',
              dark: '{colorRed900}'
            },
            colorBackgroundStatusInfo: {
              light: '{colorBlue100}',
              dark: '{colorBlue900}'
            },
            colorBackgroundStatusSuccess: {
              light: '{colorGreen100}',
              dark: '{colorGreen900}'
            },
            colorBackgroundStatusWarning: {
              light: '{colorYellow100}',
              dark: '{colorYellow900}'
            },
            colorBackgroundTableHeader: {
              light: '{colorBackgroundContainerHeader}',
              dark: '{colorBackgroundContainerHeader}'
            },
            colorBackgroundTilesDisabled: {
              light: '{colorGrey200}',
              dark: '{colorGrey750}'
            },
            colorBackgroundToggleCheckedDisabled: {
              light: '{colorBlue300}',
              dark: '{colorBlue800}'
            },
            colorBackgroundToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey500}'
            },
            colorBorderButtonNormalActive: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorBorderButtonNormalDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorBorderButtonNormalDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderButtonNormalHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorBorderButtonPrimaryDisabled: {
              light: '{colorBackgroundButtonPrimaryDisabled}',
              dark: '{colorBackgroundButtonPrimaryDisabled}'
            },
            colorBorderCalendarGrid: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderCalendarGridSelectedFocusRing: {
              light: '{colorGrey100}',
              dark: '{colorGrey800}'
            },
            colorBorderCodeEditorAceActiveLineLightTheme: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderCodeEditorAceActiveLineDarkTheme: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorPaneItemHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderContainerDivider: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderContainerTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderControlChecked: {
              light: '{colorBackgroundControlChecked}',
              dark: '{colorBackgroundControlChecked}'
            },
            colorBorderControlDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderControlDisabled: {
              light: '{colorBackgroundControlDisabled}',
              dark: '{colorBackgroundControlDisabled}'
            },
            colorBorderDividerActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorBorderDividerPanelBottom: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerPanelSide: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerSecondary: {
              light: '{colorGrey200}',
              dark: '{colorGrey700}'
            },
            colorBorderDropdownContainer: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownGroup: {
              light: '{colorBorderDropdownItemDefault}',
              dark: '{colorBorderDropdownItemDefault}'
            },
            colorBorderDropdownItemDefault: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDropdownItemHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownItemDimmedHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderDropdownItemSelected: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderDropdownItemTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderEditableCellHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderInputDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorBorderInputDisabled: {
              light: '{colorBackgroundInputDisabled}',
              dark: '{colorBackgroundInputDisabled}'
            },
            colorBorderInputFocused: {
              light: '{colorBlue800}',
              dark: '{colorBlue300}'
            },
            colorBorderItemFocused: {
              light: '{colorBlue600}',
              dark: '{colorGrey100}'
            },
            colorBorderDropdownItemFocused: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorBorderItemPlaceholder: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderItemSelected: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBorderLayout: {
              light: '{colorGrey300}',
              dark: '{colorGrey650}'
            },
            colorBorderNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderPanelHeader: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderPopover: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorBorderSegmentActive: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorBorderSegmentDisabled: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentHover: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderStatusError: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorBorderStatusInfo: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorBorderStatusSuccess: {
              light: '{colorGreen600}',
              dark: '{colorGreen500}'
            },
            colorBorderStatusWarning: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorBorderDividerInteractiveDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey300}'
            },
            colorBorderTabsDivider: {
              light: '{colorGrey350}',
              dark: '{colorGrey600}'
            },
            colorBorderTabsShadow: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorBorderTabsUnderline: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorBorderTilesDisabled: {
              light: '{colorBackgroundTilesDisabled}',
              dark: '{colorBackgroundTilesDisabled}'
            },
            colorBorderTutorial: {
              light: '{colorGrey300}',
              dark: '{colorGrey600}'
            },
            colorForegroundControlDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorForegroundControlDisabled: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorShadowDefault: {
              light: '{colorGreyTransparentHeavy}',
              dark: '{colorGreyTransparentHeavy}'
            },
            colorShadowMedium: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorShadowSide: {
              light: '{colorGreyTransparentLight}',
              dark: '{colorGreyTransparentLight}'
            },
            colorStrokeChartLine: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorStrokeCodeEditorResizeHandler: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorStrokeCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey750}'
            },
            colorStrokeCodeEditorGutterActiveLineHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey900}'
            },
            colorTextAccent: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextBodyDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey350}'
            },
            colorTextBodySecondary: {
              light: '{colorGrey600}',
              dark: '{colorGrey350}'
            },
            colorTextBreadcrumbCurrent: {
              light: '{colorGrey550}',
              dark: '{colorGrey500}'
            },
            colorTextBreadcrumbIcon: {
              light: '{colorGrey500}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextButtonInlineIconDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextButtonNormalActive: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextButtonNormalDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextButtonNormalHover: {
              light: '{colorGrey900}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonNormalDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextLinkButtonNormalHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextLinkButtonNormalActive: {
              light: '{colorTextButtonNormalActive}',
              dark: '{colorTextButtonNormalActive}'
            },
            colorTextButtonPrimaryActive: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryDefault: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryHover: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextCalendarDateHover: {
              light: '{colorTextDropdownItemDefault}',
              dark: '{colorTextDropdownItemDefault}'
            },
            colorTextCalendarDateSelected: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextCalendarMonth: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextCodeEditorGutterActiveLine: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextCodeEditorGutterDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextCodeEditorStatusBarDisabled: {
              light: '{colorGrey500}',
              dark: '{colorGrey550}'
            },
            colorTextCodeEditorTabButtonError: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextColumnHeader: {
              light: '{colorGrey600}',
              dark: '{colorGrey400}'
            },
            colorTextColumnSortingIcon: {
              light: '{colorTextColumnHeader}',
              dark: '{colorTextColumnHeader}'
            },
            colorTextControlDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextCounter: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextDisabledInlineEdit: {
              light: '{colorGrey600}',
              dark: '{colorGrey400}'
            },
            colorTextDropdownFooter: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownGroupLabel: {
              light: '{colorTextGroupLabel}',
              dark: '{colorTextGroupLabel}'
            },
            colorTextDropdownItemDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextDropdownItemDimmed: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemFilterMatch: {
              light: '{colorBlue600}',
              dark: '{colorBlue400}'
            },
            colorTextDropdownItemHighlighted: {
              light: '{colorGrey900}',
              dark: '{colorGrey200}'
            },
            colorTextDropdownItemSecondary: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownItemSecondaryHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey300}'
            },
            colorTextEmpty: {
              light: '{colorGrey550}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorTextExpandableSectionHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextExpandableSectionNavigationIconDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorTextInteractiveDefault}'
            },
            colorTextFormDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextFormLabel: {
              light: '{colorTextFormDefault}',
              dark: '{colorTextFormDefault}'
            },
            colorTextFormSecondary: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextGroupLabel: {
              light: '{colorGrey600}',
              dark: '{colorGrey350}'
            },
            colorTextLabelGenAi: {
              light: '{colorPurple600}',
              dark: '{colorPurple400}'
            },
            colorTextHeadingDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey300}'
            },
            colorTextHeadingSecondary: {
              light: '{colorGrey600}',
              dark: '{colorGrey450}'
            },
            colorTextHomeHeaderDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextHomeHeaderSecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextIconCaret: {
              light: '{colorGrey500}',
              dark: '{colorGrey450}'
            },
            colorTextIconSubtle: {
              light: '{colorGrey550}',
              dark: '{colorGrey400}'
            },
            colorTextInputDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextInputPlaceholder: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextInputPlaceholderDisabled: {
              light: '{colorTextInputDisabled}',
              dark: '{colorTextInputDisabled}'
            },
            colorTextInteractiveActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveDisabled: {
              light: '{colorGrey400}',
              dark: '{colorGrey550}'
            },
            colorTextInteractiveHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveInvertedDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveInvertedHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInverted: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextLabel: {
              light: '{colorTextFormLabel}',
              dark: '{colorTextFormLabel}'
            },
            colorTextLayoutToggle: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLayoutToggleActive: {
              light: '{colorWhite}',
              dark: '{colorGrey800}'
            },
            colorTextLayoutToggleHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextLayoutToggleSelected: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextLinkDefault: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextLinkHover: {
              light: '{colorBlue800}',
              dark: '{colorBlue400}'
            },
            colorTextLinkInvertedHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonUnderline: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextLinkButtonUnderlineHover: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextNotificationDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextNotificationStackBar: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextNotificationYellow: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextPaginationPageNumberActiveDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextPaginationPageNumberDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorGrey400}'
            },
            colorTextSegmentActive: {
              light: '{colorWhite}',
              dark: '{colorGrey900}'
            },
            colorTextSegmentDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey300}'
            },
            colorTextSegmentHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextSmall: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextStatusError: {
              light: '{colorRed600}',
              dark: '{colorRed500}'
            },
            colorTextStatusInactive: {
              light: '{colorGrey550}',
              dark: '{colorGrey450}'
            },
            colorTextStatusInfo: {
              light: '{colorBlue600}',
              dark: '{colorBlue500}'
            },
            colorTextStatusSuccess: {
              light: '{colorGreen600}',
              dark: '{colorGreen500}'
            },
            colorTextStatusWarning: {
              light: '{colorYellow800}',
              dark: '{colorYellow700}'
            },
            colorTextTopNavigationTitle: {
              light: '{colorGrey900}',
              dark: '{colorGrey100}'
            },
            colorBoardPlaceholderActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey550}'
            },
            colorBoardPlaceholderHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDragPlaceholderActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey550}'
            },
            colorDragPlaceholderHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDropzoneBackgroundActive: {
              light: '{colorGrey200}',
              dark: '{colorGrey500}'
            },
            colorDropzoneBackgroundHover: {
              light: '{colorBlue200}',
              dark: '{colorBlue600}'
            },
            colorDropzoneTextActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey800}'
            },
            colorDropzoneTextHover: {
              light: '{colorBlue800}',
              dark: '{colorWhite}'
            },
            fontExpandableHeadingSize: '14px',
            borderDividerSectionWidth: '1px'
          }
        },
        'alert-header': {
          id: 'alert-header',
          selector: '.awsui-context-content-header .awsui-context-alert',
          tokens: {
            colorGreyOpaque25: {
              light: 'rgba(255, 255, 255, 0.25)',
              dark: 'rgba(255, 255, 255, 0.25)'
            },
            colorGreyOpaque40: {
              light: 'rgba(0, 0, 0, 0.4)',
              dark: 'rgba(0, 0, 0, 0.4)'
            },
            colorGreyOpaque50: {
              light: 'rgba(0, 0, 0, 0.5)',
              dark: 'rgba(0, 0, 0, 0.5)'
            },
            colorGreyOpaque70: {
              light: 'rgba(0, 7, 22, 0.7)',
              dark: 'rgba(0, 7, 22, 0.7)'
            },
            colorGreyOpaque80: {
              light: 'rgba(22, 25, 31, 0.8)',
              dark: 'rgba(22, 25, 31, 0.8)'
            },
            colorGreyOpaque90: {
              light: 'rgba(242, 243, 243, 0.9)',
              dark: 'rgba(242, 243, 243, 0.9)'
            },
            colorGreyTransparent: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentHeavy: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorGreyTransparentLight: {
              light: 'rgba(0, 7, 22, 1)',
              dark: 'rgba(0, 7, 22, 1)'
            },
            colorBackgroundBadgeIcon: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBackgroundButtonLinkActive: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonLinkHover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundButtonNormalActive: {
              light: 'rgba(255, 255, 255, 0.15)',
              dark: 'rgba(255, 255, 255, 0.15)'
            },
            colorBackgroundButtonNormalDefault: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundButtonNormalDisabled: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundButtonNormalHover: {
              light: 'rgba(255, 255, 255, 0.1)',
              dark: 'rgba(255, 255, 255, 0.1)'
            },
            colorBackgroundButtonPrimaryActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundButtonPrimaryDefault: {
              light: '{colorBorderButtonNormalDefault}',
              dark: '{colorBorderButtonNormalDefault}'
            },
            colorBackgroundButtonPrimaryDisabled: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundButtonPrimaryHover: {
              light: '{colorBorderButtonNormalHover}',
              dark: '{colorBorderButtonNormalHover}'
            },
            colorBackgroundCalendarCurrentDate: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCellShaded: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBackgroundCodeEditorGutterActiveLineError: {
              light: '{colorTextStatusError}',
              dark: '{colorTextStatusError}'
            },
            colorBackgroundCodeEditorGutterDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorLoading: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundCodeEditorPaneItemHover: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundCodeEditorStatusBar: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundContainerContent: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundContainerHeader: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlChecked: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundControlDefault: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundControlDisabled: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundDropdownItemDimmed: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBackgroundDropdownItemFilterMatch: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundDropdownItemHover: {
              light: '{colorGrey850}',
              dark: '{colorGrey850}'
            },
            colorBackgroundDropdownItemSelected: {
              light: '{colorBackgroundItemSelected}',
              dark: '{colorBackgroundItemSelected}'
            },
            colorBackgroundHomeHeader: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundInputDefault: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundInputDisabled: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundItemSelected: {
              light: '{colorBlue900}',
              dark: '{colorBlue900}'
            },
            colorBackgroundLayoutMain: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundLayoutMobilePanel: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorBackgroundLayoutPanelContent: {
              light: '{colorBackgroundContainerContent}',
              dark: '{colorBackgroundContainerContent}'
            },
            colorBackgroundLayoutPanelHover: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundLayoutToggleActive: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleDefault: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundLayoutToggleHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundLayoutToggleSelectedActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundLayoutToggleSelectedHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBackgroundModalOverlay: {
              light: '{colorGreyOpaque70}',
              dark: '{colorGreyOpaque70}'
            },
            colorBackgroundNotificationBlue: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorBackgroundNotificationGreen: {
              light: '{colorGreen600}',
              dark: '{colorGreen600}'
            },
            colorBackgroundNotificationGrey: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundNotificationRed: {
              light: '{colorRed600}',
              dark: '{colorRed600}'
            },
            colorBackgroundNotificationYellow: {
              light: '{colorYellow600}',
              dark: '{colorYellow600}'
            },
            colorBackgroundNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarActive: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBackgroundNotificationStackBarHover: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBackgroundPopover: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundProgressBarContentDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundProgressBarContentInFlash: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorBackgroundProgressBarLayoutDefault: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBackgroundProgressBarLayoutInFlash: {
              light: '{colorGreyOpaque25}',
              dark: '{colorGreyOpaque25}'
            },
            colorBackgroundSegmentActive: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSegmentDefault: {
              light: '{colorBackgroundButtonNormalDefault}',
              dark: '{colorBackgroundButtonNormalDefault}'
            },
            colorBackgroundSegmentDisabled: {
              light: '{colorBackgroundButtonNormalDisabled}',
              dark: '{colorBackgroundButtonNormalDisabled}'
            },
            colorBackgroundSegmentHover: {
              light: '{colorBackgroundSegmentDefault}',
              dark: '{colorBackgroundSegmentDefault}'
            },
            colorBackgroundSliderHandleDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBackgroundSliderHandleActive: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorBackgroundSliderTrack: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBackgroundSliderHandleRing: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBackgroundSliderErrorPressed: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBackgroundSliderWarningPressed: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorBackgroundStatusError: {
              light: '{colorRed900}',
              dark: '{colorRed900}'
            },
            colorBackgroundStatusInfo: {
              light: '{colorBlue900}',
              dark: '{colorBlue900}'
            },
            colorBackgroundStatusSuccess: {
              light: '{colorGreen900}',
              dark: '{colorGreen900}'
            },
            colorBackgroundStatusWarning: {
              light: '{colorYellow900}',
              dark: '{colorYellow900}'
            },
            colorBackgroundTableHeader: {
              light: '{colorBackgroundContainerHeader}',
              dark: '{colorBackgroundContainerHeader}'
            },
            colorBackgroundTilesDisabled: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorBackgroundToggleCheckedDisabled: {
              light: '{colorBlue800}',
              dark: '{colorBlue800}'
            },
            colorBackgroundToggleDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderButtonNormalActive: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorBorderButtonNormalDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorBorderButtonNormalDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderButtonNormalHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorBorderButtonPrimaryDisabled: {
              light: '{colorBackgroundButtonPrimaryDisabled}',
              dark: '{colorBackgroundButtonPrimaryDisabled}'
            },
            colorBorderCalendarGrid: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderCalendarGridSelectedFocusRing: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorBorderCodeEditorAceActiveLineLightTheme: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderCodeEditorAceActiveLineDarkTheme: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderCodeEditorPaneItemHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderContainerDivider: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderContainerTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderControlChecked: {
              light: '{colorBackgroundControlChecked}',
              dark: '{colorBackgroundControlChecked}'
            },
            colorBorderControlDefault: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderControlDisabled: {
              light: '{colorBackgroundControlDisabled}',
              dark: '{colorBackgroundControlDisabled}'
            },
            colorBorderDividerActive: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderDividerDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorBorderDividerPanelBottom: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerPanelSide: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDividerSecondary: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderDropdownContainer: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownGroup: {
              light: '{colorBorderDropdownItemDefault}',
              dark: '{colorBorderDropdownItemDefault}'
            },
            colorBorderDropdownItemDefault: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderDropdownItemHover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderDropdownItemDimmedHover: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorBorderDropdownItemSelected: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderDropdownItemTop: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorBorderEditableCellHover: {
              light: '{colorBorderDropdownItemHover}',
              dark: '{colorBorderDropdownItemHover}'
            },
            colorBorderInputDefault: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderInputDisabled: {
              light: '{colorBackgroundInputDisabled}',
              dark: '{colorBackgroundInputDisabled}'
            },
            colorBorderInputFocused: {
              light: '{colorBlue300}',
              dark: '{colorBlue300}'
            },
            colorBorderItemFocused: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBorderDropdownItemFocused: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderItemPlaceholder: {
              light: '{colorBorderItemSelected}',
              dark: '{colorBorderItemSelected}'
            },
            colorBorderItemSelected: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderLayout: {
              light: '{colorGrey650}',
              dark: '{colorGrey650}'
            },
            colorBorderNotificationStackBar: {
              light: '{colorGrey700}',
              dark: '{colorGrey700}'
            },
            colorBorderPanelHeader: {
              light: '{colorBorderDividerDefault}',
              dark: '{colorBorderDividerDefault}'
            },
            colorBorderPopover: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBorderSegmentActive: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderSegmentDisabled: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderSegmentHover: {
              light: '{colorBorderSegmentDefault}',
              dark: '{colorBorderSegmentDefault}'
            },
            colorBorderStatusError: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorBorderStatusInfo: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorBorderStatusSuccess: {
              light: '{colorGreen500}',
              dark: '{colorGreen500}'
            },
            colorBorderStatusWarning: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorBorderDividerInteractiveDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorBorderTabsDivider: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorBorderTabsShadow: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorBorderTabsUnderline: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorBorderTilesDisabled: {
              light: '{colorBackgroundTilesDisabled}',
              dark: '{colorBackgroundTilesDisabled}'
            },
            colorBorderTutorial: {
              light: '{colorGrey600}',
              dark: '{colorGrey600}'
            },
            colorForegroundControlDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorForegroundControlDisabled: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorShadowDefault: {
              light: '{colorGreyTransparentHeavy}',
              dark: '{colorGreyTransparentHeavy}'
            },
            colorShadowMedium: {
              light: '{colorGreyTransparent}',
              dark: '{colorGreyTransparent}'
            },
            colorShadowSide: {
              light: '{colorGreyTransparentLight}',
              dark: '{colorGreyTransparentLight}'
            },
            colorStrokeChartLine: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorStrokeCodeEditorResizeHandler: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorStrokeCodeEditorGutterActiveLineDefault: {
              light: '{colorGrey750}',
              dark: '{colorGrey750}'
            },
            colorStrokeCodeEditorGutterActiveLineHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextAccent: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextBodyDefault: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextBodySecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextBreadcrumbCurrent: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorTextBreadcrumbIcon: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextButtonInlineIconDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextButtonInlineIconHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextButtonNormalActive: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextButtonNormalDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextButtonNormalHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonNormalDefault: {
              light: '{colorTextLinkDefault}',
              dark: '{colorTextLinkDefault}'
            },
            colorTextLinkButtonNormalHover: {
              light: '{colorTextLinkHover}',
              dark: '{colorTextLinkHover}'
            },
            colorTextLinkButtonNormalActive: {
              light: '{colorTextButtonNormalActive}',
              dark: '{colorTextButtonNormalActive}'
            },
            colorTextButtonPrimaryActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryDefault: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextButtonPrimaryHover: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextCalendarDateHover: {
              light: '{colorTextDropdownItemDefault}',
              dark: '{colorTextDropdownItemDefault}'
            },
            colorTextCalendarDateSelected: {
              light: '{colorTextAccent}',
              dark: '{colorTextAccent}'
            },
            colorTextCalendarMonth: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextCodeEditorGutterActiveLine: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextCodeEditorGutterDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextCodeEditorStatusBarDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextCodeEditorTabButtonError: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextColumnHeader: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextColumnSortingIcon: {
              light: '{colorTextColumnHeader}',
              dark: '{colorTextColumnHeader}'
            },
            colorTextControlDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextCounter: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextDisabledInlineEdit: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextDropdownFooter: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownGroupLabel: {
              light: '{colorTextGroupLabel}',
              dark: '{colorTextGroupLabel}'
            },
            colorTextDropdownItemDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextDropdownItemDimmed: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextDropdownItemFilterMatch: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextDropdownItemHighlighted: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextDropdownItemSecondary: {
              light: '{colorTextFormSecondary}',
              dark: '{colorTextFormSecondary}'
            },
            colorTextDropdownItemSecondaryHover: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextEmpty: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextExpandableSectionDefault: {
              light: '{colorTextButtonNormalDefault}',
              dark: '{colorTextButtonNormalDefault}'
            },
            colorTextExpandableSectionHover: {
              light: '{colorTextButtonNormalHover}',
              dark: '{colorTextButtonNormalHover}'
            },
            colorTextExpandableSectionNavigationIconDefault: {
              light: '{colorTextInteractiveDefault}',
              dark: '{colorTextInteractiveDefault}'
            },
            colorTextFormDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextFormLabel: {
              light: '{colorTextFormDefault}',
              dark: '{colorTextFormDefault}'
            },
            colorTextFormSecondary: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextGroupLabel: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextLabelGenAi: {
              light: '{colorPurple400}',
              dark: '{colorPurple400}'
            },
            colorTextHeadingDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextHeadingSecondary: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextHomeHeaderDefault: {
              light: '{colorGrey200}',
              dark: '{colorGrey200}'
            },
            colorTextHomeHeaderSecondary: {
              light: '{colorGrey350}',
              dark: '{colorGrey350}'
            },
            colorTextIconCaret: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextIconSubtle: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextInputDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextInputPlaceholder: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextInputPlaceholderDisabled: {
              light: '{colorTextInputDisabled}',
              dark: '{colorTextInputDisabled}'
            },
            colorTextInteractiveActive: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveDisabled: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorTextInteractiveHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInteractiveInvertedDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextInteractiveInvertedHover: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextInverted: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLabel: {
              light: '{colorTextFormLabel}',
              dark: '{colorTextFormLabel}'
            },
            colorTextLayoutToggle: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLayoutToggleActive: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorTextLayoutToggleHover: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextLayoutToggleSelected: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextLinkDefault: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextLinkHover: {
              light: '{colorBlue400}',
              dark: '{colorBlue400}'
            },
            colorTextLinkInvertedHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextLinkButtonUnderline: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextLinkButtonUnderlineHover: {
              light: 'transparent',
              dark: 'transparent'
            },
            colorTextNotificationDefault: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorTextNotificationStackBar: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            },
            colorTextNotificationYellow: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextPaginationPageNumberActiveDisabled: {
              light: '{colorTextInteractiveDisabled}',
              dark: '{colorTextInteractiveDisabled}'
            },
            colorTextPaginationPageNumberDefault: {
              light: '{colorGrey400}',
              dark: '{colorGrey400}'
            },
            colorTextSegmentActive: {
              light: '{colorGrey900}',
              dark: '{colorGrey900}'
            },
            colorTextSegmentDefault: {
              light: '{colorGrey300}',
              dark: '{colorGrey300}'
            },
            colorTextSegmentHover: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextSmall: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextStatusError: {
              light: '{colorRed500}',
              dark: '{colorRed500}'
            },
            colorTextStatusInactive: {
              light: '{colorGrey450}',
              dark: '{colorGrey450}'
            },
            colorTextStatusInfo: {
              light: '{colorBlue500}',
              dark: '{colorBlue500}'
            },
            colorTextStatusSuccess: {
              light: '{colorGreen500}',
              dark: '{colorGreen500}'
            },
            colorTextStatusWarning: {
              light: '{colorYellow700}',
              dark: '{colorYellow700}'
            },
            colorTextTopNavigationTitle: {
              light: '{colorGrey100}',
              dark: '{colorGrey100}'
            },
            colorBoardPlaceholderActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorBoardPlaceholderHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDragPlaceholderActive: {
              light: '{colorGrey550}',
              dark: '{colorGrey550}'
            },
            colorDragPlaceholderHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDropzoneBackgroundActive: {
              light: '{colorGrey500}',
              dark: '{colorGrey500}'
            },
            colorDropzoneBackgroundHover: {
              light: '{colorBlue600}',
              dark: '{colorBlue600}'
            },
            colorDropzoneTextActive: {
              light: '{colorGrey800}',
              dark: '{colorGrey800}'
            },
            colorDropzoneTextHover: {
              light: '{colorWhite}',
              dark: '{colorWhite}'
            }
          }
        }
      },
      tokenModeMap: {
        colorChartsRed300: 'color',
        colorChartsRed400: 'color',
        colorChartsRed500: 'color',
        colorChartsRed600: 'color',
        colorChartsRed700: 'color',
        colorChartsRed800: 'color',
        colorChartsRed900: 'color',
        colorChartsRed1000: 'color',
        colorChartsRed1100: 'color',
        colorChartsRed1200: 'color',
        colorChartsOrange300: 'color',
        colorChartsOrange400: 'color',
        colorChartsOrange500: 'color',
        colorChartsOrange600: 'color',
        colorChartsOrange700: 'color',
        colorChartsOrange800: 'color',
        colorChartsOrange900: 'color',
        colorChartsOrange1000: 'color',
        colorChartsOrange1100: 'color',
        colorChartsOrange1200: 'color',
        colorChartsYellow300: 'color',
        colorChartsYellow400: 'color',
        colorChartsYellow500: 'color',
        colorChartsYellow600: 'color',
        colorChartsYellow700: 'color',
        colorChartsYellow800: 'color',
        colorChartsYellow900: 'color',
        colorChartsYellow1000: 'color',
        colorChartsYellow1100: 'color',
        colorChartsYellow1200: 'color',
        colorChartsGreen300: 'color',
        colorChartsGreen400: 'color',
        colorChartsGreen500: 'color',
        colorChartsGreen600: 'color',
        colorChartsGreen700: 'color',
        colorChartsGreen800: 'color',
        colorChartsGreen900: 'color',
        colorChartsGreen1000: 'color',
        colorChartsGreen1100: 'color',
        colorChartsGreen1200: 'color',
        colorChartsTeal300: 'color',
        colorChartsTeal400: 'color',
        colorChartsTeal500: 'color',
        colorChartsTeal600: 'color',
        colorChartsTeal700: 'color',
        colorChartsTeal800: 'color',
        colorChartsTeal900: 'color',
        colorChartsTeal1000: 'color',
        colorChartsTeal1100: 'color',
        colorChartsTeal1200: 'color',
        colorChartsBlue1300: 'color',
        colorChartsBlue1400: 'color',
        colorChartsBlue1500: 'color',
        colorChartsBlue1600: 'color',
        colorChartsBlue1700: 'color',
        colorChartsBlue1800: 'color',
        colorChartsBlue1900: 'color',
        colorChartsBlue11000: 'color',
        colorChartsBlue11100: 'color',
        colorChartsBlue11200: 'color',
        colorChartsBlue2300: 'color',
        colorChartsBlue2400: 'color',
        colorChartsBlue2500: 'color',
        colorChartsBlue2600: 'color',
        colorChartsBlue2700: 'color',
        colorChartsBlue2800: 'color',
        colorChartsBlue2900: 'color',
        colorChartsBlue21000: 'color',
        colorChartsBlue21100: 'color',
        colorChartsBlue21200: 'color',
        colorChartsPurple300: 'color',
        colorChartsPurple400: 'color',
        colorChartsPurple500: 'color',
        colorChartsPurple600: 'color',
        colorChartsPurple700: 'color',
        colorChartsPurple800: 'color',
        colorChartsPurple900: 'color',
        colorChartsPurple1000: 'color',
        colorChartsPurple1100: 'color',
        colorChartsPurple1200: 'color',
        colorChartsPink300: 'color',
        colorChartsPink400: 'color',
        colorChartsPink500: 'color',
        colorChartsPink600: 'color',
        colorChartsPink700: 'color',
        colorChartsPink800: 'color',
        colorChartsPink900: 'color',
        colorChartsPink1000: 'color',
        colorChartsPink1100: 'color',
        colorChartsPink1200: 'color',
        colorChartsStatusCritical: 'color',
        colorChartsStatusHigh: 'color',
        colorChartsStatusMedium: 'color',
        colorChartsStatusLow: 'color',
        colorChartsStatusPositive: 'color',
        colorChartsStatusInfo: 'color',
        colorChartsStatusNeutral: 'color',
        colorChartsThresholdNegative: 'color',
        colorChartsThresholdPositive: 'color',
        colorChartsThresholdInfo: 'color',
        colorChartsThresholdNeutral: 'color',
        colorChartsLineGrid: 'color',
        colorChartsLineTick: 'color',
        colorChartsLineAxis: 'color',
        colorChartsPaletteCategorical1: 'color',
        colorChartsPaletteCategorical2: 'color',
        colorChartsPaletteCategorical3: 'color',
        colorChartsPaletteCategorical4: 'color',
        colorChartsPaletteCategorical5: 'color',
        colorChartsPaletteCategorical6: 'color',
        colorChartsPaletteCategorical7: 'color',
        colorChartsPaletteCategorical8: 'color',
        colorChartsPaletteCategorical9: 'color',
        colorChartsPaletteCategorical10: 'color',
        colorChartsPaletteCategorical11: 'color',
        colorChartsPaletteCategorical12: 'color',
        colorChartsPaletteCategorical13: 'color',
        colorChartsPaletteCategorical14: 'color',
        colorChartsPaletteCategorical15: 'color',
        colorChartsPaletteCategorical16: 'color',
        colorChartsPaletteCategorical17: 'color',
        colorChartsPaletteCategorical18: 'color',
        colorChartsPaletteCategorical19: 'color',
        colorChartsPaletteCategorical20: 'color',
        colorChartsPaletteCategorical21: 'color',
        colorChartsPaletteCategorical22: 'color',
        colorChartsPaletteCategorical23: 'color',
        colorChartsPaletteCategorical24: 'color',
        colorChartsPaletteCategorical25: 'color',
        colorChartsPaletteCategorical26: 'color',
        colorChartsPaletteCategorical27: 'color',
        colorChartsPaletteCategorical28: 'color',
        colorChartsPaletteCategorical29: 'color',
        colorChartsPaletteCategorical30: 'color',
        colorChartsPaletteCategorical31: 'color',
        colorChartsPaletteCategorical32: 'color',
        colorChartsPaletteCategorical33: 'color',
        colorChartsPaletteCategorical34: 'color',
        colorChartsPaletteCategorical35: 'color',
        colorChartsPaletteCategorical36: 'color',
        colorChartsPaletteCategorical37: 'color',
        colorChartsPaletteCategorical38: 'color',
        colorChartsPaletteCategorical39: 'color',
        colorChartsPaletteCategorical40: 'color',
        colorChartsPaletteCategorical41: 'color',
        colorChartsPaletteCategorical42: 'color',
        colorChartsPaletteCategorical43: 'color',
        colorChartsPaletteCategorical44: 'color',
        colorChartsPaletteCategorical45: 'color',
        colorChartsPaletteCategorical46: 'color',
        colorChartsPaletteCategorical47: 'color',
        colorChartsPaletteCategorical48: 'color',
        colorChartsPaletteCategorical49: 'color',
        colorChartsPaletteCategorical50: 'color',
        colorGreyOpaque25: 'color',
        colorGreyOpaque40: 'color',
        colorGreyOpaque50: 'color',
        colorGreyOpaque70: 'color',
        colorGreyOpaque80: 'color',
        colorGreyOpaque90: 'color',
        colorGreyTransparent: 'color',
        colorGreyTransparentHeavy: 'color',
        colorGreyTransparentLight: 'color',
        colorBackgroundBadgeIcon: 'color',
        colorBackgroundButtonLinkActive: 'color',
        colorBackgroundButtonLinkHover: 'color',
        colorBackgroundButtonNormalActive: 'color',
        colorBackgroundButtonNormalDefault: 'color',
        colorBackgroundButtonNormalDisabled: 'color',
        colorBackgroundButtonNormalHover: 'color',
        colorBackgroundButtonPrimaryActive: 'color',
        colorBackgroundButtonPrimaryDefault: 'color',
        colorBackgroundButtonPrimaryDisabled: 'color',
        colorBackgroundButtonPrimaryHover: 'color',
        colorBackgroundCalendarCurrentDate: 'color',
        colorBackgroundCellShaded: 'color',
        colorBackgroundCodeEditorGutterActiveLineDefault: 'color',
        colorBackgroundCodeEditorGutterActiveLineError: 'color',
        colorBackgroundCodeEditorGutterDefault: 'color',
        colorBackgroundCodeEditorLoading: 'color',
        colorBackgroundCodeEditorPaneItemHover: 'color',
        colorBackgroundCodeEditorStatusBar: 'color',
        colorBackgroundContainerContent: 'color',
        colorBackgroundContainerHeader: 'color',
        colorBackgroundControlChecked: 'color',
        colorBackgroundControlDefault: 'color',
        colorBackgroundControlDisabled: 'color',
        colorBackgroundDropdownItemDefault: 'color',
        colorBackgroundDropdownItemDimmed: 'color',
        colorBackgroundDropdownItemFilterMatch: 'color',
        colorBackgroundDropdownItemHover: 'color',
        colorBackgroundDropdownItemSelected: 'color',
        colorBackgroundHomeHeader: 'color',
        colorBackgroundInputDefault: 'color',
        colorBackgroundInputDisabled: 'color',
        colorBackgroundItemSelected: 'color',
        colorBackgroundLayoutMain: 'color',
        colorBackgroundLayoutMobilePanel: 'color',
        colorBackgroundLayoutPanelContent: 'color',
        colorBackgroundLayoutPanelHover: 'color',
        colorBackgroundLayoutToggleActive: 'color',
        colorBackgroundLayoutToggleDefault: 'color',
        colorBackgroundLayoutToggleHover: 'color',
        colorBackgroundLayoutToggleSelectedActive: 'color',
        colorBackgroundLayoutToggleSelectedDefault: 'color',
        colorBackgroundLayoutToggleSelectedHover: 'color',
        colorBackgroundModalOverlay: 'color',
        colorBackgroundNotificationBlue: 'color',
        colorBackgroundNotificationGreen: 'color',
        colorBackgroundNotificationGrey: 'color',
        colorBackgroundNotificationRed: 'color',
        colorBackgroundNotificationYellow: 'color',
        colorBackgroundNotificationStackBar: 'color',
        colorBackgroundNotificationStackBarActive: 'color',
        colorBackgroundNotificationStackBarHover: 'color',
        colorBackgroundPopover: 'color',
        colorBackgroundProgressBarContentDefault: 'color',
        colorBackgroundProgressBarContentInFlash: 'color',
        colorBackgroundProgressBarLayoutDefault: 'color',
        colorBackgroundProgressBarLayoutInFlash: 'color',
        colorBackgroundSegmentActive: 'color',
        colorBackgroundSegmentDefault: 'color',
        colorBackgroundSegmentDisabled: 'color',
        colorBackgroundSegmentHover: 'color',
        colorBackgroundSliderHandleDefault: 'color',
        colorBackgroundSliderHandleActive: 'color',
        colorBackgroundSliderTrack: 'color',
        colorBackgroundSliderHandleRing: 'color',
        colorBackgroundSliderErrorPressed: 'color',
        colorBackgroundSliderWarningPressed: 'color',
        colorBackgroundStatusError: 'color',
        colorBackgroundStatusInfo: 'color',
        colorBackgroundStatusSuccess: 'color',
        colorBackgroundStatusWarning: 'color',
        colorBackgroundTableHeader: 'color',
        colorBackgroundTilesDisabled: 'color',
        colorBackgroundToggleCheckedDisabled: 'color',
        colorBackgroundToggleDefault: 'color',
        colorBorderButtonNormalActive: 'color',
        colorBorderButtonNormalDefault: 'color',
        colorBorderButtonNormalDisabled: 'color',
        colorBorderButtonNormalHover: 'color',
        colorBorderButtonPrimaryDisabled: 'color',
        colorBorderCalendarGrid: 'color',
        colorBorderCalendarGridSelectedFocusRing: 'color',
        colorBorderCodeEditorAceActiveLineLightTheme: 'color',
        colorBorderCodeEditorAceActiveLineDarkTheme: 'color',
        colorBorderCodeEditorDefault: 'color',
        colorBorderCodeEditorPaneItemHover: 'color',
        colorBorderContainerDivider: 'color',
        colorBorderContainerTop: 'color',
        colorBorderControlChecked: 'color',
        colorBorderControlDefault: 'color',
        colorBorderControlDisabled: 'color',
        colorBorderDividerActive: 'color',
        colorBorderDividerDefault: 'color',
        colorBorderDividerPanelBottom: 'color',
        colorBorderDividerPanelSide: 'color',
        colorBorderDividerSecondary: 'color',
        colorBorderDropdownContainer: 'color',
        colorBorderDropdownGroup: 'color',
        colorBorderDropdownItemDefault: 'color',
        colorBorderDropdownItemHover: 'color',
        colorBorderDropdownItemDimmedHover: 'color',
        colorBorderDropdownItemSelected: 'color',
        colorBorderDropdownItemTop: 'color',
        colorBorderEditableCellHover: 'color',
        colorBorderInputDefault: 'color',
        colorBorderInputDisabled: 'color',
        colorBorderInputFocused: 'color',
        colorBorderItemFocused: 'color',
        colorBorderDropdownItemFocused: 'color',
        colorBorderItemPlaceholder: 'color',
        colorBorderItemSelected: 'color',
        colorBorderLayout: 'color',
        colorBorderNotificationStackBar: 'color',
        colorBorderPanelHeader: 'color',
        colorBorderPopover: 'color',
        colorBorderSegmentActive: 'color',
        colorBorderSegmentDefault: 'color',
        colorBorderSegmentDisabled: 'color',
        colorBorderSegmentHover: 'color',
        colorBorderStatusError: 'color',
        colorBorderStatusInfo: 'color',
        colorBorderStatusSuccess: 'color',
        colorBorderStatusWarning: 'color',
        colorBorderDividerInteractiveDefault: 'color',
        colorBorderTabsDivider: 'color',
        colorBorderTabsShadow: 'color',
        colorBorderTabsUnderline: 'color',
        colorBorderTilesDisabled: 'color',
        colorBorderTutorial: 'color',
        colorForegroundControlDefault: 'color',
        colorForegroundControlDisabled: 'color',
        colorShadowDefault: 'color',
        colorShadowMedium: 'color',
        colorShadowSide: 'color',
        colorStrokeChartLine: 'color',
        colorStrokeCodeEditorResizeHandler: 'color',
        colorStrokeCodeEditorGutterActiveLineDefault: 'color',
        colorStrokeCodeEditorGutterActiveLineHover: 'color',
        colorTextAccent: 'color',
        colorTextBodyDefault: 'color',
        colorTextBodySecondary: 'color',
        colorTextBreadcrumbCurrent: 'color',
        colorTextBreadcrumbIcon: 'color',
        colorTextButtonInlineIconDefault: 'color',
        colorTextButtonInlineIconDisabled: 'color',
        colorTextButtonInlineIconHover: 'color',
        colorTextButtonNormalActive: 'color',
        colorTextButtonNormalDefault: 'color',
        colorTextButtonNormalHover: 'color',
        colorTextLinkButtonNormalDefault: 'color',
        colorTextLinkButtonNormalHover: 'color',
        colorTextLinkButtonNormalActive: 'color',
        colorTextButtonPrimaryActive: 'color',
        colorTextButtonPrimaryDefault: 'color',
        colorTextButtonPrimaryHover: 'color',
        colorTextCalendarDateHover: 'color',
        colorTextCalendarDateSelected: 'color',
        colorTextCalendarMonth: 'color',
        colorTextCodeEditorGutterActiveLine: 'color',
        colorTextCodeEditorGutterDefault: 'color',
        colorTextCodeEditorStatusBarDisabled: 'color',
        colorTextCodeEditorTabButtonError: 'color',
        colorTextColumnHeader: 'color',
        colorTextColumnSortingIcon: 'color',
        colorTextControlDisabled: 'color',
        colorTextCounter: 'color',
        colorTextDisabled: 'color',
        colorTextDisabledInlineEdit: 'color',
        colorTextDropdownFooter: 'color',
        colorTextDropdownGroupLabel: 'color',
        colorTextDropdownItemDefault: 'color',
        colorTextDropdownItemDimmed: 'color',
        colorTextDropdownItemDisabled: 'color',
        colorTextDropdownItemFilterMatch: 'color',
        colorTextDropdownItemHighlighted: 'color',
        colorTextDropdownItemSecondary: 'color',
        colorTextDropdownItemSecondaryHover: 'color',
        colorTextEmpty: 'color',
        colorTextExpandableSectionDefault: 'color',
        colorTextExpandableSectionHover: 'color',
        colorTextExpandableSectionNavigationIconDefault: 'color',
        colorTextFormDefault: 'color',
        colorTextFormLabel: 'color',
        colorTextFormSecondary: 'color',
        colorTextGroupLabel: 'color',
        colorTextLabelGenAi: 'color',
        colorTextHeadingDefault: 'color',
        colorTextHeadingSecondary: 'color',
        colorTextHomeHeaderDefault: 'color',
        colorTextHomeHeaderSecondary: 'color',
        colorTextIconCaret: 'color',
        colorTextIconSubtle: 'color',
        colorTextInputDisabled: 'color',
        colorTextInputPlaceholder: 'color',
        colorTextInputPlaceholderDisabled: 'color',
        colorTextInteractiveActive: 'color',
        colorTextInteractiveDefault: 'color',
        colorTextInteractiveDisabled: 'color',
        colorTextInteractiveHover: 'color',
        colorTextInteractiveInvertedDefault: 'color',
        colorTextInteractiveInvertedHover: 'color',
        colorTextInverted: 'color',
        colorTextLabel: 'color',
        colorTextLayoutToggle: 'color',
        colorTextLayoutToggleActive: 'color',
        colorTextLayoutToggleHover: 'color',
        colorTextLayoutToggleSelected: 'color',
        colorTextLinkDefault: 'color',
        colorTextLinkHover: 'color',
        colorTextLinkInvertedHover: 'color',
        colorTextLinkButtonUnderline: 'color',
        colorTextLinkButtonUnderlineHover: 'color',
        colorTextNotificationDefault: 'color',
        colorTextNotificationStackBar: 'color',
        colorTextNotificationYellow: 'color',
        colorTextPaginationPageNumberActiveDisabled: 'color',
        colorTextPaginationPageNumberDefault: 'color',
        colorTextSegmentActive: 'color',
        colorTextSegmentDefault: 'color',
        colorTextSegmentHover: 'color',
        colorTextSmall: 'color',
        colorTextStatusError: 'color',
        colorTextStatusInactive: 'color',
        colorTextStatusInfo: 'color',
        colorTextStatusSuccess: 'color',
        colorTextStatusWarning: 'color',
        colorTextTopNavigationTitle: 'color',
        colorBoardPlaceholderActive: 'color',
        colorBoardPlaceholderHover: 'color',
        colorDragPlaceholderActive: 'color',
        colorDragPlaceholderHover: 'color',
        colorDropzoneBackgroundActive: 'color',
        colorDropzoneBackgroundHover: 'color',
        colorDropzoneTextActive: 'color',
        colorDropzoneTextHover: 'color',
        motionDurationExtraFast: 'motion',
        motionDurationExtraSlow: 'motion',
        motionDurationFast: 'motion',
        motionDurationModerate: 'motion',
        motionDurationRefreshOnlyAmbient: 'motion',
        motionDurationRefreshOnlyFast: 'motion',
        motionDurationRefreshOnlyMedium: 'motion',
        motionDurationRefreshOnlySlow: 'motion',
        motionDurationRotate180: 'motion',
        motionDurationRotate90: 'motion',
        motionDurationShowPaced: 'motion',
        motionDurationShowQuick: 'motion',
        motionDurationSlow: 'motion',
        motionDurationTransitionQuick: 'motion',
        motionDurationTransitionShowPaced: 'motion',
        motionDurationTransitionShowQuick: 'motion',
        motionEasingEaseOutQuart: 'motion',
        motionEasingRefreshOnlyA: 'motion',
        motionEasingRefreshOnlyB: 'motion',
        motionEasingRefreshOnlyC: 'motion',
        motionEasingRefreshOnlyD: 'motion',
        motionEasingRotate180: 'motion',
        motionEasingRotate90: 'motion',
        motionEasingShowPaced: 'motion',
        motionEasingShowQuick: 'motion',
        motionEasingTransitionQuick: 'motion',
        motionEasingTransitionShowPaced: 'motion',
        motionEasingTransitionShowQuick: 'motion',
        motionEasingResponsive: 'motion',
        motionEasingSticky: 'motion',
        motionEasingExpressive: 'motion',
        motionDurationResponsive: 'motion',
        motionDurationExpressive: 'motion',
        motionDurationComplex: 'motion',
        motionKeyframesFadeIn: 'motion',
        motionKeyframesFadeOut: 'motion',
        motionKeyframesStatusIconError: 'motion',
        motionKeyframesScalePopup: 'motion',
        sizeCalendarGridWidth: 'density',
        sizeControl: 'density',
        sizeIconBig: 'density',
        sizeIconLarge: 'density',
        sizeIconMedium: 'density',
        sizeIconNormal: 'density',
        sizeTableSelectionHorizontal: 'density',
        sizeVerticalInput: 'density',
        sizeVerticalPanelIconOffset: 'density',
        spaceAlertActionLeft: 'density',
        spaceAlertHorizontal: 'density',
        spaceAlertMessageRight: 'density',
        spaceAlertVertical: 'density',
        spaceButtonFocusOutlineGutter: 'density',
        spaceButtonHorizontal: 'density',
        spaceButtonIconFocusOutlineGutterVertical: 'density',
        spaceButtonIconOnlyHorizontal: 'density',
        spaceButtonInlineIconFocusOutlineGutter: 'density',
        spaceButtonModalDismissVertical: 'density',
        spaceCalendarGridFocusOutlineGutter: 'density',
        spaceCalendarGridSelectedFocusOutlineGutter: 'density',
        spaceCalendarGridGutter: 'density',
        spaceCardHorizontal: 'density',
        spaceCardVertical: 'density',
        spaceCodeEditorStatusFocusOutlineGutter: 'density',
        spaceContainerContentTop: 'density',
        spaceContainerHeaderTop: 'density',
        spaceContainerHeaderBottom: 'density',
        spaceContainerHorizontal: 'density',
        spaceContentHeaderPaddingBottom: 'density',
        spaceDarkHeaderOverlapDistance: 'density',
        spaceExpandableSectionIconOffsetTop: 'density',
        spaceFieldHorizontal: 'density',
        spaceFieldIconOffset: 'density',
        spaceFilteringTokenDismissButtonFocusOutlineGutter: 'density',
        spaceFilteringTokenOperationSelectFocusOutlineGutter: 'density',
        spaceFlashbarActionLeft: 'density',
        spaceFlashbarDismissRight: 'density',
        spaceFlashbarHorizontal: 'density',
        spaceGridGutter: 'density',
        spaceKeyValueGap: 'density',
        spaceLayoutContentBottom: 'density',
        spaceLayoutContentHorizontal: 'density',
        spaceLayoutToggleDiameter: 'density',
        spaceLayoutTogglePadding: 'density',
        spaceModalContentBottom: 'density',
        spaceModalHorizontal: 'density',
        spaceOptionIconBigTop: 'density',
        spacePanelContentBottom: 'density',
        spacePanelContentTop: 'density',
        spacePanelDividerMarginHorizontal: 'density',
        spacePanelHeaderVertical: 'density',
        spacePanelNavLeft: 'density',
        spacePanelSideLeft: 'density',
        spacePanelSideRight: 'density',
        spacePanelSplitTop: 'density',
        spacePanelSplitBottom: 'density',
        spaceSegmentedControlFocusOutlineGutter: 'density',
        spaceTabsContentTop: 'density',
        spaceTabsFocusOutlineGutter: 'density',
        spaceTableContentBottom: 'density',
        spaceTableEmbeddedHeaderTop: 'density',
        spaceTableFooterHorizontal: 'density',
        spaceTableHeaderFocusOutlineGutter: 'density',
        spaceTableHeaderHorizontal: 'density',
        spaceTableHeaderToolsBottom: 'density',
        spaceTableHeaderToolsFullPageBottom: 'density',
        spaceTableHorizontal: 'density',
        spaceScaled2xNone: 'density',
        spaceScaled2xXxxs: 'density',
        spaceScaled2xXxs: 'density',
        spaceScaled2xXs: 'density',
        spaceScaled2xS: 'density',
        spaceScaled2xM: 'density',
        spaceScaled2xL: 'density',
        spaceScaled2xXl: 'density',
        spaceScaled2xXxl: 'density',
        spaceScaled2xXxxl: 'density',
        spaceScaledNone: 'density',
        spaceScaledXxxs: 'density',
        spaceScaledXxs: 'density',
        spaceScaledXs: 'density',
        spaceScaledS: 'density',
        spaceScaledM: 'density',
        spaceScaledL: 'density',
        spaceScaledXl: 'density',
        spaceScaledXxl: 'density',
        spaceScaledXxxl: 'density',
        spaceStaticXxxs: 'density',
        spaceStaticXxs: 'density',
        spaceStaticXs: 'density',
        spaceStaticS: 'density',
        spaceStaticM: 'density',
        spaceStaticL: 'density',
        spaceStaticXl: 'density',
        spaceStaticXxl: 'density',
        spaceStaticXxxl: 'density',
        spaceNone: 'density',
        spaceXxxs: 'density',
        spaceXxs: 'density',
        spaceXs: 'density',
        spaceS: 'density',
        spaceM: 'density',
        spaceL: 'density',
        spaceXl: 'density',
        spaceXxl: 'density',
        spaceXxxl: 'density',
        shadowContainer: 'color',
        shadowContainerStacked: 'color',
        shadowContainerActive: 'color',
        shadowDropdown: 'color',
        shadowDropup: 'color',
        shadowFlashCollapsed: 'color',
        shadowFlashSticky: 'color',
        shadowModal: 'color',
        shadowPanel: 'color',
        shadowPanelToggle: 'color',
        shadowPopover: 'color',
        shadowSplitBottom: 'color',
        shadowSplitSide: 'color',
        shadowSticky: 'color',
        shadowStickyEmbedded: 'color',
        shadowStickyColumnFirst: 'color',
        shadowStickyColumnLast: 'color'
      }
    }
  ],
  themeable: [
    'colorChartsStatusCritical',
    'colorChartsStatusHigh',
    'colorChartsStatusMedium',
    'colorChartsStatusLow',
    'colorChartsStatusPositive',
    'colorChartsStatusInfo',
    'colorChartsStatusNeutral',
    'colorChartsThresholdNegative',
    'colorChartsThresholdPositive',
    'colorChartsThresholdInfo',
    'colorChartsThresholdNeutral',
    'colorChartsPaletteCategorical1',
    'colorChartsPaletteCategorical2',
    'colorChartsPaletteCategorical3',
    'colorChartsPaletteCategorical4',
    'colorChartsPaletteCategorical5',
    'colorChartsPaletteCategorical6',
    'colorChartsPaletteCategorical7',
    'colorChartsPaletteCategorical8',
    'colorChartsPaletteCategorical9',
    'colorChartsPaletteCategorical10',
    'colorChartsPaletteCategorical11',
    'colorChartsPaletteCategorical12',
    'colorChartsPaletteCategorical13',
    'colorChartsPaletteCategorical14',
    'colorChartsPaletteCategorical15',
    'colorChartsPaletteCategorical16',
    'colorChartsPaletteCategorical17',
    'colorChartsPaletteCategorical18',
    'colorChartsPaletteCategorical19',
    'colorChartsPaletteCategorical20',
    'colorChartsPaletteCategorical21',
    'colorChartsPaletteCategorical22',
    'colorChartsPaletteCategorical23',
    'colorChartsPaletteCategorical24',
    'colorChartsPaletteCategorical25',
    'colorChartsPaletteCategorical26',
    'colorChartsPaletteCategorical27',
    'colorChartsPaletteCategorical28',
    'colorChartsPaletteCategorical29',
    'colorChartsPaletteCategorical30',
    'colorChartsPaletteCategorical31',
    'colorChartsPaletteCategorical32',
    'colorChartsPaletteCategorical33',
    'colorChartsPaletteCategorical34',
    'colorChartsPaletteCategorical35',
    'colorChartsPaletteCategorical36',
    'colorChartsPaletteCategorical37',
    'colorChartsPaletteCategorical38',
    'colorChartsPaletteCategorical39',
    'colorChartsPaletteCategorical40',
    'colorChartsPaletteCategorical41',
    'colorChartsPaletteCategorical42',
    'colorChartsPaletteCategorical43',
    'colorChartsPaletteCategorical44',
    'colorChartsPaletteCategorical45',
    'colorChartsPaletteCategorical46',
    'colorChartsPaletteCategorical47',
    'colorChartsPaletteCategorical48',
    'colorChartsPaletteCategorical49',
    'colorChartsPaletteCategorical50',
    'colorBackgroundButtonNormalActive',
    'colorBackgroundButtonNormalDefault',
    'colorBackgroundButtonNormalDisabled',
    'colorBackgroundButtonNormalHover',
    'colorBackgroundButtonPrimaryActive',
    'colorBackgroundButtonPrimaryDefault',
    'colorBackgroundButtonPrimaryDisabled',
    'colorBackgroundButtonPrimaryHover',
    'colorBackgroundCellShaded',
    'colorBackgroundContainerContent',
    'colorBackgroundContainerHeader',
    'colorBackgroundControlChecked',
    'colorBackgroundControlDefault',
    'colorBackgroundControlDisabled',
    'colorBackgroundDropdownItemDefault',
    'colorBackgroundDropdownItemFilterMatch',
    'colorBackgroundDropdownItemHover',
    'colorBackgroundHomeHeader',
    'colorBackgroundInputDefault',
    'colorBackgroundInputDisabled',
    'colorBackgroundItemSelected',
    'colorBackgroundLayoutMain',
    'colorBackgroundLayoutToggleActive',
    'colorBackgroundLayoutToggleDefault',
    'colorBackgroundLayoutToggleHover',
    'colorBackgroundLayoutToggleSelectedActive',
    'colorBackgroundLayoutToggleSelectedDefault',
    'colorBackgroundLayoutToggleSelectedHover',
    'colorBackgroundNotificationBlue',
    'colorBackgroundNotificationGreen',
    'colorBackgroundNotificationRed',
    'colorBackgroundNotificationYellow',
    'colorBackgroundPopover',
    'colorBackgroundSegmentActive',
    'colorBackgroundSegmentDefault',
    'colorBackgroundSegmentDisabled',
    'colorBackgroundSegmentHover',
    'colorBackgroundStatusError',
    'colorBackgroundStatusInfo',
    'colorBackgroundStatusSuccess',
    'colorBackgroundStatusWarning',
    'colorBackgroundToggleCheckedDisabled',
    'colorBorderButtonNormalActive',
    'colorBorderButtonNormalDefault',
    'colorBorderButtonNormalDisabled',
    'colorBorderButtonNormalHover',
    'colorBorderButtonPrimaryDisabled',
    'colorBorderContainerTop',
    'colorBorderControlDefault',
    'colorBorderDividerDefault',
    'colorBorderDividerSecondary',
    'colorBorderDropdownItemHover',
    'colorBorderInputDefault',
    'colorBorderInputFocused',
    'colorBorderItemFocused',
    'colorBorderDropdownItemFocused',
    'colorBorderItemSelected',
    'colorBorderSegmentActive',
    'colorBorderSegmentDefault',
    'colorBorderSegmentDisabled',
    'colorBorderSegmentHover',
    'colorBorderStatusError',
    'colorBorderStatusInfo',
    'colorBorderStatusSuccess',
    'colorBorderStatusWarning',
    'colorForegroundControlDefault',
    'colorForegroundControlDisabled',
    'colorTextAccent',
    'colorTextBodyDefault',
    'colorTextBodySecondary',
    'colorTextBreadcrumbCurrent',
    'colorTextBreadcrumbIcon',
    'colorTextButtonNormalActive',
    'colorTextButtonNormalDefault',
    'colorTextButtonNormalHover',
    'colorTextLinkButtonNormalDefault',
    'colorTextLinkButtonNormalHover',
    'colorTextLinkButtonNormalActive',
    'colorTextButtonPrimaryActive',
    'colorTextButtonPrimaryDefault',
    'colorTextButtonPrimaryHover',
    'colorTextCounter',
    'colorTextDropdownItemDefault',
    'colorTextDropdownItemDisabled',
    'colorTextDropdownItemFilterMatch',
    'colorTextDropdownItemHighlighted',
    'colorTextEmpty',
    'colorTextFormDefault',
    'colorTextFormSecondary',
    'colorTextGroupLabel',
    'colorTextHeadingDefault',
    'colorTextHeadingSecondary',
    'colorTextHomeHeaderDefault',
    'colorTextHomeHeaderSecondary',
    'colorTextInputDisabled',
    'colorTextInputPlaceholder',
    'colorTextInteractiveActive',
    'colorTextInteractiveDefault',
    'colorTextInteractiveDisabled',
    'colorTextInteractiveHover',
    'colorTextInteractiveInvertedDefault',
    'colorTextInteractiveInvertedHover',
    'colorTextLabel',
    'colorTextLayoutToggle',
    'colorTextLayoutToggleActive',
    'colorTextLayoutToggleHover',
    'colorTextLayoutToggleSelected',
    'colorTextLinkDefault',
    'colorTextLinkHover',
    'colorTextNotificationDefault',
    'colorTextSegmentActive',
    'colorTextSegmentDefault',
    'colorTextSegmentHover',
    'colorTextStatusError',
    'colorTextStatusInactive',
    'colorTextStatusInfo',
    'colorTextStatusSuccess',
    'colorTextStatusWarning',
    'colorTextTopNavigationTitle',
    'fontFamilyBase',
    'fontFamilyMonospace',
    'fontSizeBodyM',
    'fontSizeBodyS',
    'fontSizeDisplayL',
    'fontSizeHeadingXl',
    'fontSizeHeadingL',
    'fontSizeHeadingM',
    'fontSizeHeadingS',
    'fontSizeHeadingXs',
    'fontWeightHeadingXl',
    'fontWeightHeadingL',
    'fontWeightHeadingM',
    'fontWeightHeadingS',
    'fontWeightHeadingXs',
    'lineHeightBodyM',
    'lineHeightBodyS',
    'lineHeightDisplayL',
    'lineHeightHeadingXl',
    'lineHeightHeadingL',
    'lineHeightHeadingM',
    'lineHeightHeadingS',
    'lineHeightHeadingXs',
    'borderRadiusAlert',
    'borderRadiusBadge',
    'borderRadiusButton',
    'borderRadiusCalendarDayFocusRing',
    'borderRadiusContainer',
    'borderRadiusControlCircularFocusRing',
    'borderRadiusControlDefaultFocusRing',
    'borderRadiusDropdown',
    'borderRadiusFlashbar',
    'borderRadiusItem',
    'borderRadiusInput',
    'borderRadiusPopover',
    'borderRadiusTabsFocusRing',
    'borderRadiusTiles',
    'borderRadiusToken',
    'borderRadiusTutorialPanelItem'
  ],
  exposed: [
    'colorChartsRed300',
    'colorChartsRed400',
    'colorChartsRed500',
    'colorChartsRed600',
    'colorChartsRed700',
    'colorChartsRed800',
    'colorChartsRed900',
    'colorChartsRed1000',
    'colorChartsRed1100',
    'colorChartsRed1200',
    'colorChartsOrange300',
    'colorChartsOrange400',
    'colorChartsOrange500',
    'colorChartsOrange600',
    'colorChartsOrange700',
    'colorChartsOrange800',
    'colorChartsOrange900',
    'colorChartsOrange1000',
    'colorChartsOrange1100',
    'colorChartsOrange1200',
    'colorChartsYellow300',
    'colorChartsYellow400',
    'colorChartsYellow500',
    'colorChartsYellow600',
    'colorChartsYellow700',
    'colorChartsYellow800',
    'colorChartsYellow900',
    'colorChartsYellow1000',
    'colorChartsYellow1100',
    'colorChartsYellow1200',
    'colorChartsGreen300',
    'colorChartsGreen400',
    'colorChartsGreen500',
    'colorChartsGreen600',
    'colorChartsGreen700',
    'colorChartsGreen800',
    'colorChartsGreen900',
    'colorChartsGreen1000',
    'colorChartsGreen1100',
    'colorChartsGreen1200',
    'colorChartsTeal300',
    'colorChartsTeal400',
    'colorChartsTeal500',
    'colorChartsTeal600',
    'colorChartsTeal700',
    'colorChartsTeal800',
    'colorChartsTeal900',
    'colorChartsTeal1000',
    'colorChartsTeal1100',
    'colorChartsTeal1200',
    'colorChartsBlue1300',
    'colorChartsBlue1400',
    'colorChartsBlue1500',
    'colorChartsBlue1600',
    'colorChartsBlue1700',
    'colorChartsBlue1800',
    'colorChartsBlue1900',
    'colorChartsBlue11000',
    'colorChartsBlue11100',
    'colorChartsBlue11200',
    'colorChartsBlue2300',
    'colorChartsBlue2400',
    'colorChartsBlue2500',
    'colorChartsBlue2600',
    'colorChartsBlue2700',
    'colorChartsBlue2800',
    'colorChartsBlue2900',
    'colorChartsBlue21000',
    'colorChartsBlue21100',
    'colorChartsBlue21200',
    'colorChartsPurple300',
    'colorChartsPurple400',
    'colorChartsPurple500',
    'colorChartsPurple600',
    'colorChartsPurple700',
    'colorChartsPurple800',
    'colorChartsPurple900',
    'colorChartsPurple1000',
    'colorChartsPurple1100',
    'colorChartsPurple1200',
    'colorChartsPink300',
    'colorChartsPink400',
    'colorChartsPink500',
    'colorChartsPink600',
    'colorChartsPink700',
    'colorChartsPink800',
    'colorChartsPink900',
    'colorChartsPink1000',
    'colorChartsPink1100',
    'colorChartsPink1200',
    'colorChartsStatusCritical',
    'colorChartsStatusHigh',
    'colorChartsStatusMedium',
    'colorChartsStatusLow',
    'colorChartsStatusPositive',
    'colorChartsStatusInfo',
    'colorChartsStatusNeutral',
    'colorChartsThresholdNegative',
    'colorChartsThresholdPositive',
    'colorChartsThresholdInfo',
    'colorChartsThresholdNeutral',
    'colorChartsLineGrid',
    'colorChartsLineTick',
    'colorChartsLineAxis',
    'colorChartsPaletteCategorical1',
    'colorChartsPaletteCategorical2',
    'colorChartsPaletteCategorical3',
    'colorChartsPaletteCategorical4',
    'colorChartsPaletteCategorical5',
    'colorChartsPaletteCategorical6',
    'colorChartsPaletteCategorical7',
    'colorChartsPaletteCategorical8',
    'colorChartsPaletteCategorical9',
    'colorChartsPaletteCategorical10',
    'colorChartsPaletteCategorical11',
    'colorChartsPaletteCategorical12',
    'colorChartsPaletteCategorical13',
    'colorChartsPaletteCategorical14',
    'colorChartsPaletteCategorical15',
    'colorChartsPaletteCategorical16',
    'colorChartsPaletteCategorical17',
    'colorChartsPaletteCategorical18',
    'colorChartsPaletteCategorical19',
    'colorChartsPaletteCategorical20',
    'colorChartsPaletteCategorical21',
    'colorChartsPaletteCategorical22',
    'colorChartsPaletteCategorical23',
    'colorChartsPaletteCategorical24',
    'colorChartsPaletteCategorical25',
    'colorChartsPaletteCategorical26',
    'colorChartsPaletteCategorical27',
    'colorChartsPaletteCategorical28',
    'colorChartsPaletteCategorical29',
    'colorChartsPaletteCategorical30',
    'colorChartsPaletteCategorical31',
    'colorChartsPaletteCategorical32',
    'colorChartsPaletteCategorical33',
    'colorChartsPaletteCategorical34',
    'colorChartsPaletteCategorical35',
    'colorChartsPaletteCategorical36',
    'colorChartsPaletteCategorical37',
    'colorChartsPaletteCategorical38',
    'colorChartsPaletteCategorical39',
    'colorChartsPaletteCategorical40',
    'colorChartsPaletteCategorical41',
    'colorChartsPaletteCategorical42',
    'colorChartsPaletteCategorical43',
    'colorChartsPaletteCategorical44',
    'colorChartsPaletteCategorical45',
    'colorChartsPaletteCategorical46',
    'colorChartsPaletteCategorical47',
    'colorChartsPaletteCategorical48',
    'colorChartsPaletteCategorical49',
    'colorChartsPaletteCategorical50',
    'colorBackgroundButtonNormalActive',
    'colorBackgroundButtonNormalDefault',
    'colorBackgroundButtonNormalDisabled',
    'colorBackgroundButtonNormalHover',
    'colorBackgroundButtonPrimaryActive',
    'colorBackgroundButtonPrimaryDefault',
    'colorBackgroundButtonPrimaryDisabled',
    'colorBackgroundButtonPrimaryHover',
    'colorBackgroundCellShaded',
    'colorBackgroundContainerContent',
    'colorBackgroundContainerHeader',
    'colorBackgroundControlChecked',
    'colorBackgroundControlDefault',
    'colorBackgroundControlDisabled',
    'colorBackgroundDropdownItemDefault',
    'colorBackgroundDropdownItemFilterMatch',
    'colorBackgroundDropdownItemHover',
    'colorBackgroundHomeHeader',
    'colorBackgroundInputDefault',
    'colorBackgroundInputDisabled',
    'colorBackgroundItemSelected',
    'colorBackgroundLayoutMain',
    'colorBackgroundLayoutToggleActive',
    'colorBackgroundLayoutToggleDefault',
    'colorBackgroundLayoutToggleHover',
    'colorBackgroundLayoutToggleSelectedActive',
    'colorBackgroundLayoutToggleSelectedDefault',
    'colorBackgroundLayoutToggleSelectedHover',
    'colorBackgroundNotificationBlue',
    'colorBackgroundNotificationGreen',
    'colorBackgroundNotificationRed',
    'colorBackgroundNotificationYellow',
    'colorBackgroundPopover',
    'colorBackgroundSegmentActive',
    'colorBackgroundSegmentDefault',
    'colorBackgroundSegmentDisabled',
    'colorBackgroundSegmentHover',
    'colorBackgroundStatusError',
    'colorBackgroundStatusInfo',
    'colorBackgroundStatusSuccess',
    'colorBackgroundStatusWarning',
    'colorBackgroundToggleCheckedDisabled',
    'colorBorderButtonNormalActive',
    'colorBorderButtonNormalDefault',
    'colorBorderButtonNormalDisabled',
    'colorBorderButtonNormalHover',
    'colorBorderButtonPrimaryDisabled',
    'colorBorderContainerTop',
    'colorBorderControlDefault',
    'colorBorderDividerDefault',
    'colorBorderDividerSecondary',
    'colorBorderDropdownItemHover',
    'colorBorderInputDefault',
    'colorBorderInputFocused',
    'colorBorderItemFocused',
    'colorBorderDropdownItemFocused',
    'colorBorderItemSelected',
    'colorBorderSegmentActive',
    'colorBorderSegmentDefault',
    'colorBorderSegmentDisabled',
    'colorBorderSegmentHover',
    'colorBorderStatusError',
    'colorBorderStatusInfo',
    'colorBorderStatusSuccess',
    'colorBorderStatusWarning',
    'colorForegroundControlDefault',
    'colorForegroundControlDisabled',
    'colorTextAccent',
    'colorTextBodyDefault',
    'colorTextBodySecondary',
    'colorTextBreadcrumbCurrent',
    'colorTextBreadcrumbIcon',
    'colorTextButtonNormalActive',
    'colorTextButtonNormalDefault',
    'colorTextButtonNormalHover',
    'colorTextButtonPrimaryActive',
    'colorTextButtonPrimaryDefault',
    'colorTextButtonPrimaryHover',
    'colorTextCounter',
    'colorTextDropdownItemDefault',
    'colorTextDropdownItemDisabled',
    'colorTextDropdownItemFilterMatch',
    'colorTextDropdownItemHighlighted',
    'colorTextEmpty',
    'colorTextFormDefault',
    'colorTextFormSecondary',
    'colorTextGroupLabel',
    'colorTextLabelGenAi',
    'colorTextHeadingDefault',
    'colorTextHeadingSecondary',
    'colorTextHomeHeaderDefault',
    'colorTextHomeHeaderSecondary',
    'colorTextInputDisabled',
    'colorTextInputPlaceholder',
    'colorTextInteractiveActive',
    'colorTextInteractiveDefault',
    'colorTextInteractiveDisabled',
    'colorTextInteractiveHover',
    'colorTextInteractiveInvertedDefault',
    'colorTextInteractiveInvertedHover',
    'colorTextLabel',
    'colorTextLayoutToggle',
    'colorTextLayoutToggleActive',
    'colorTextLayoutToggleHover',
    'colorTextLayoutToggleSelected',
    'colorTextLinkDefault',
    'colorTextLinkHover',
    'colorTextNotificationDefault',
    'colorTextSegmentActive',
    'colorTextSegmentDefault',
    'colorTextSegmentHover',
    'colorTextStatusError',
    'colorTextStatusInactive',
    'colorTextStatusInfo',
    'colorTextStatusSuccess',
    'colorTextStatusWarning',
    'colorTextTopNavigationTitle',
    'colorBoardPlaceholderActive',
    'colorBoardPlaceholderHover',
    'colorDragPlaceholderActive',
    'colorDragPlaceholderHover',
    'fontFamilyBase',
    'fontFamilyMonospace',
    'fontSizeBodyM',
    'fontSizeBodyS',
    'fontSizeDisplayL',
    'fontSizeHeadingXl',
    'fontSizeHeadingL',
    'fontSizeHeadingM',
    'fontSizeHeadingS',
    'fontSizeHeadingXs',
    'fontWeightHeadingXl',
    'fontWeightHeadingL',
    'fontWeightHeadingM',
    'fontWeightHeadingS',
    'fontWeightHeadingXs',
    'lineHeightBodyM',
    'lineHeightBodyS',
    'lineHeightDisplayL',
    'lineHeightHeadingXl',
    'lineHeightHeadingL',
    'lineHeightHeadingM',
    'lineHeightHeadingS',
    'lineHeightHeadingXs',
    'borderRadiusAlert',
    'borderRadiusBadge',
    'borderRadiusButton',
    'borderRadiusCalendarDayFocusRing',
    'borderRadiusContainer',
    'borderRadiusControlCircularFocusRing',
    'borderRadiusControlDefaultFocusRing',
    'borderRadiusDropdown',
    'borderRadiusFlashbar',
    'borderRadiusItem',
    'borderRadiusInput',
    'borderRadiusPopover',
    'borderRadiusTabsFocusRing',
    'borderRadiusTiles',
    'borderRadiusToken',
    'borderRadiusTutorialPanelItem',
    'motionEasingResponsive',
    'motionEasingSticky',
    'motionEasingExpressive',
    'motionDurationResponsive',
    'motionDurationExpressive',
    'motionDurationComplex',
    'motionKeyframesFadeIn',
    'motionKeyframesFadeOut',
    'motionKeyframesStatusIconError',
    'motionKeyframesScalePopup',
    'spaceContainerHorizontal',
    'spaceFieldHorizontal',
    'spaceScaledXxxs',
    'spaceScaledXxs',
    'spaceScaledXs',
    'spaceScaledS',
    'spaceScaledM',
    'spaceScaledL',
    'spaceScaledXl',
    'spaceScaledXxl',
    'spaceScaledXxxl',
    'spaceStaticXxxs',
    'spaceStaticXxs',
    'spaceStaticXs',
    'spaceStaticS',
    'spaceStaticM',
    'spaceStaticL',
    'spaceStaticXl',
    'spaceStaticXxl',
    'spaceStaticXxxl',
    'shadowContainerActive'
  ],
  variablesMap: {
    colorAmazonOrange: 'color-amazon-orange',
    colorAwsSquidInk: 'color-aws-squid-ink',
    colorBlack: 'color-black',
    colorBlue100: 'color-blue-100',
    colorBlue200: 'color-blue-200',
    colorBlue300: 'color-blue-300',
    colorBlue400: 'color-blue-400',
    colorBlue500: 'color-blue-500',
    colorBlue600: 'color-blue-600',
    colorBlue700: 'color-blue-700',
    colorBlue800: 'color-blue-800',
    colorBlue900: 'color-blue-900',
    colorBlueOpaque: 'color-blue-opaque',
    colorGreen100: 'color-green-100',
    colorGreen500: 'color-green-500',
    colorGreen600: 'color-green-600',
    colorGreen700: 'color-green-700',
    colorGreen900: 'color-green-900',
    colorGrey100: 'color-grey-100',
    colorGrey125: 'color-grey-125',
    colorGrey150: 'color-grey-150',
    colorGrey200: 'color-grey-200',
    colorGrey300: 'color-grey-300',
    colorGrey350: 'color-grey-350',
    colorGrey400: 'color-grey-400',
    colorGrey450: 'color-grey-450',
    colorGrey500: 'color-grey-500',
    colorGrey550: 'color-grey-550',
    colorGrey600: 'color-grey-600',
    colorGrey650: 'color-grey-650',
    colorGrey700: 'color-grey-700',
    colorGrey750: 'color-grey-750',
    colorGrey800: 'color-grey-800',
    colorGrey850: 'color-grey-850',
    colorGrey900: 'color-grey-900',
    colorGrey950: 'color-grey-950',
    colorOrange100: 'color-orange-100',
    colorOrange500: 'color-orange-500',
    colorOrange600: 'color-orange-600',
    colorOrange700: 'color-orange-700',
    colorPurple400: 'color-purple-400',
    colorPurple600: 'color-purple-600',
    colorRed100: 'color-red-100',
    colorRed500: 'color-red-500',
    colorRed600: 'color-red-600',
    colorRed700: 'color-red-700',
    colorRed900: 'color-red-900',
    colorTransparent: 'color-transparent',
    colorWhite: 'color-white',
    colorYellow100: 'color-yellow-100',
    colorYellow600: 'color-yellow-600',
    colorYellow700: 'color-yellow-700',
    colorYellow800: 'color-yellow-800',
    colorYellow900: 'color-yellow-900',
    colorChartsRed300: 'color-charts-red-300',
    colorChartsRed400: 'color-charts-red-400',
    colorChartsRed500: 'color-charts-red-500',
    colorChartsRed600: 'color-charts-red-600',
    colorChartsRed700: 'color-charts-red-700',
    colorChartsRed800: 'color-charts-red-800',
    colorChartsRed900: 'color-charts-red-900',
    colorChartsRed1000: 'color-charts-red-1000',
    colorChartsRed1100: 'color-charts-red-1100',
    colorChartsRed1200: 'color-charts-red-1200',
    colorChartsOrange300: 'color-charts-orange-300',
    colorChartsOrange400: 'color-charts-orange-400',
    colorChartsOrange500: 'color-charts-orange-500',
    colorChartsOrange600: 'color-charts-orange-600',
    colorChartsOrange700: 'color-charts-orange-700',
    colorChartsOrange800: 'color-charts-orange-800',
    colorChartsOrange900: 'color-charts-orange-900',
    colorChartsOrange1000: 'color-charts-orange-1000',
    colorChartsOrange1100: 'color-charts-orange-1100',
    colorChartsOrange1200: 'color-charts-orange-1200',
    colorChartsYellow300: 'color-charts-yellow-300',
    colorChartsYellow400: 'color-charts-yellow-400',
    colorChartsYellow500: 'color-charts-yellow-500',
    colorChartsYellow600: 'color-charts-yellow-600',
    colorChartsYellow700: 'color-charts-yellow-700',
    colorChartsYellow800: 'color-charts-yellow-800',
    colorChartsYellow900: 'color-charts-yellow-900',
    colorChartsYellow1000: 'color-charts-yellow-1000',
    colorChartsYellow1100: 'color-charts-yellow-1100',
    colorChartsYellow1200: 'color-charts-yellow-1200',
    colorChartsGreen300: 'color-charts-green-300',
    colorChartsGreen400: 'color-charts-green-400',
    colorChartsGreen500: 'color-charts-green-500',
    colorChartsGreen600: 'color-charts-green-600',
    colorChartsGreen700: 'color-charts-green-700',
    colorChartsGreen800: 'color-charts-green-800',
    colorChartsGreen900: 'color-charts-green-900',
    colorChartsGreen1000: 'color-charts-green-1000',
    colorChartsGreen1100: 'color-charts-green-1100',
    colorChartsGreen1200: 'color-charts-green-1200',
    colorChartsTeal300: 'color-charts-teal-300',
    colorChartsTeal400: 'color-charts-teal-400',
    colorChartsTeal500: 'color-charts-teal-500',
    colorChartsTeal600: 'color-charts-teal-600',
    colorChartsTeal700: 'color-charts-teal-700',
    colorChartsTeal800: 'color-charts-teal-800',
    colorChartsTeal900: 'color-charts-teal-900',
    colorChartsTeal1000: 'color-charts-teal-1000',
    colorChartsTeal1100: 'color-charts-teal-1100',
    colorChartsTeal1200: 'color-charts-teal-1200',
    colorChartsBlue1300: 'color-charts-blue-1-300',
    colorChartsBlue1400: 'color-charts-blue-1-400',
    colorChartsBlue1500: 'color-charts-blue-1-500',
    colorChartsBlue1600: 'color-charts-blue-1-600',
    colorChartsBlue1700: 'color-charts-blue-1-700',
    colorChartsBlue1800: 'color-charts-blue-1-800',
    colorChartsBlue1900: 'color-charts-blue-1-900',
    colorChartsBlue11000: 'color-charts-blue-1-1000',
    colorChartsBlue11100: 'color-charts-blue-1-1100',
    colorChartsBlue11200: 'color-charts-blue-1-1200',
    colorChartsBlue2300: 'color-charts-blue-2-300',
    colorChartsBlue2400: 'color-charts-blue-2-400',
    colorChartsBlue2500: 'color-charts-blue-2-500',
    colorChartsBlue2600: 'color-charts-blue-2-600',
    colorChartsBlue2700: 'color-charts-blue-2-700',
    colorChartsBlue2800: 'color-charts-blue-2-800',
    colorChartsBlue2900: 'color-charts-blue-2-900',
    colorChartsBlue21000: 'color-charts-blue-2-1000',
    colorChartsBlue21100: 'color-charts-blue-2-1100',
    colorChartsBlue21200: 'color-charts-blue-2-1200',
    colorChartsPurple300: 'color-charts-purple-300',
    colorChartsPurple400: 'color-charts-purple-400',
    colorChartsPurple500: 'color-charts-purple-500',
    colorChartsPurple600: 'color-charts-purple-600',
    colorChartsPurple700: 'color-charts-purple-700',
    colorChartsPurple800: 'color-charts-purple-800',
    colorChartsPurple900: 'color-charts-purple-900',
    colorChartsPurple1000: 'color-charts-purple-1000',
    colorChartsPurple1100: 'color-charts-purple-1100',
    colorChartsPurple1200: 'color-charts-purple-1200',
    colorChartsPink300: 'color-charts-pink-300',
    colorChartsPink400: 'color-charts-pink-400',
    colorChartsPink500: 'color-charts-pink-500',
    colorChartsPink600: 'color-charts-pink-600',
    colorChartsPink700: 'color-charts-pink-700',
    colorChartsPink800: 'color-charts-pink-800',
    colorChartsPink900: 'color-charts-pink-900',
    colorChartsPink1000: 'color-charts-pink-1000',
    colorChartsPink1100: 'color-charts-pink-1100',
    colorChartsPink1200: 'color-charts-pink-1200',
    colorChartsStatusCritical: 'color-charts-status-critical',
    colorChartsStatusHigh: 'color-charts-status-high',
    colorChartsStatusMedium: 'color-charts-status-medium',
    colorChartsStatusLow: 'color-charts-status-low',
    colorChartsStatusPositive: 'color-charts-status-positive',
    colorChartsStatusInfo: 'color-charts-status-info',
    colorChartsStatusNeutral: 'color-charts-status-neutral',
    colorChartsThresholdNegative: 'color-charts-threshold-negative',
    colorChartsThresholdPositive: 'color-charts-threshold-positive',
    colorChartsThresholdInfo: 'color-charts-threshold-info',
    colorChartsThresholdNeutral: 'color-charts-threshold-neutral',
    colorChartsLineGrid: 'color-charts-line-grid',
    colorChartsLineTick: 'color-charts-line-tick',
    colorChartsLineAxis: 'color-charts-line-axis',
    colorChartsPaletteCategorical1: 'color-charts-palette-categorical-1',
    colorChartsPaletteCategorical2: 'color-charts-palette-categorical-2',
    colorChartsPaletteCategorical3: 'color-charts-palette-categorical-3',
    colorChartsPaletteCategorical4: 'color-charts-palette-categorical-4',
    colorChartsPaletteCategorical5: 'color-charts-palette-categorical-5',
    colorChartsPaletteCategorical6: 'color-charts-palette-categorical-6',
    colorChartsPaletteCategorical7: 'color-charts-palette-categorical-7',
    colorChartsPaletteCategorical8: 'color-charts-palette-categorical-8',
    colorChartsPaletteCategorical9: 'color-charts-palette-categorical-9',
    colorChartsPaletteCategorical10: 'color-charts-palette-categorical-10',
    colorChartsPaletteCategorical11: 'color-charts-palette-categorical-11',
    colorChartsPaletteCategorical12: 'color-charts-palette-categorical-12',
    colorChartsPaletteCategorical13: 'color-charts-palette-categorical-13',
    colorChartsPaletteCategorical14: 'color-charts-palette-categorical-14',
    colorChartsPaletteCategorical15: 'color-charts-palette-categorical-15',
    colorChartsPaletteCategorical16: 'color-charts-palette-categorical-16',
    colorChartsPaletteCategorical17: 'color-charts-palette-categorical-17',
    colorChartsPaletteCategorical18: 'color-charts-palette-categorical-18',
    colorChartsPaletteCategorical19: 'color-charts-palette-categorical-19',
    colorChartsPaletteCategorical20: 'color-charts-palette-categorical-20',
    colorChartsPaletteCategorical21: 'color-charts-palette-categorical-21',
    colorChartsPaletteCategorical22: 'color-charts-palette-categorical-22',
    colorChartsPaletteCategorical23: 'color-charts-palette-categorical-23',
    colorChartsPaletteCategorical24: 'color-charts-palette-categorical-24',
    colorChartsPaletteCategorical25: 'color-charts-palette-categorical-25',
    colorChartsPaletteCategorical26: 'color-charts-palette-categorical-26',
    colorChartsPaletteCategorical27: 'color-charts-palette-categorical-27',
    colorChartsPaletteCategorical28: 'color-charts-palette-categorical-28',
    colorChartsPaletteCategorical29: 'color-charts-palette-categorical-29',
    colorChartsPaletteCategorical30: 'color-charts-palette-categorical-30',
    colorChartsPaletteCategorical31: 'color-charts-palette-categorical-31',
    colorChartsPaletteCategorical32: 'color-charts-palette-categorical-32',
    colorChartsPaletteCategorical33: 'color-charts-palette-categorical-33',
    colorChartsPaletteCategorical34: 'color-charts-palette-categorical-34',
    colorChartsPaletteCategorical35: 'color-charts-palette-categorical-35',
    colorChartsPaletteCategorical36: 'color-charts-palette-categorical-36',
    colorChartsPaletteCategorical37: 'color-charts-palette-categorical-37',
    colorChartsPaletteCategorical38: 'color-charts-palette-categorical-38',
    colorChartsPaletteCategorical39: 'color-charts-palette-categorical-39',
    colorChartsPaletteCategorical40: 'color-charts-palette-categorical-40',
    colorChartsPaletteCategorical41: 'color-charts-palette-categorical-41',
    colorChartsPaletteCategorical42: 'color-charts-palette-categorical-42',
    colorChartsPaletteCategorical43: 'color-charts-palette-categorical-43',
    colorChartsPaletteCategorical44: 'color-charts-palette-categorical-44',
    colorChartsPaletteCategorical45: 'color-charts-palette-categorical-45',
    colorChartsPaletteCategorical46: 'color-charts-palette-categorical-46',
    colorChartsPaletteCategorical47: 'color-charts-palette-categorical-47',
    colorChartsPaletteCategorical48: 'color-charts-palette-categorical-48',
    colorChartsPaletteCategorical49: 'color-charts-palette-categorical-49',
    colorChartsPaletteCategorical50: 'color-charts-palette-categorical-50',
    colorGreyOpaque25: 'color-grey-opaque-25',
    colorGreyOpaque40: 'color-grey-opaque-40',
    colorGreyOpaque50: 'color-grey-opaque-50',
    colorGreyOpaque70: 'color-grey-opaque-70',
    colorGreyOpaque80: 'color-grey-opaque-80',
    colorGreyOpaque90: 'color-grey-opaque-90',
    colorGreyTransparent: 'color-grey-transparent',
    colorGreyTransparentHeavy: 'color-grey-transparent-heavy',
    colorGreyTransparentLight: 'color-grey-transparent-light',
    colorBackgroundBadgeIcon: 'color-background-badge-icon',
    colorBackgroundButtonLinkActive: 'color-background-button-link-active',
    colorBackgroundButtonLinkHover: 'color-background-button-link-hover',
    colorBackgroundButtonNormalActive: 'color-background-button-normal-active',
    colorBackgroundButtonNormalDefault:
      'color-background-button-normal-default',
    colorBackgroundButtonNormalDisabled:
      'color-background-button-normal-disabled',
    colorBackgroundButtonNormalHover: 'color-background-button-normal-hover',
    colorBackgroundButtonPrimaryActive:
      'color-background-button-primary-active',
    colorBackgroundButtonPrimaryDefault:
      'color-background-button-primary-default',
    colorBackgroundButtonPrimaryDisabled:
      'color-background-button-primary-disabled',
    colorBackgroundButtonPrimaryHover: 'color-background-button-primary-hover',
    colorBackgroundCalendarCurrentDate:
      'color-background-calendar-current-date',
    colorBackgroundCellShaded: 'color-background-cell-shaded',
    colorBackgroundCodeEditorGutterActiveLineDefault:
      'color-background-code-editor-gutter-active-line-default',
    colorBackgroundCodeEditorGutterActiveLineError:
      'color-background-code-editor-gutter-active-line-error',
    colorBackgroundCodeEditorGutterDefault:
      'color-background-code-editor-gutter-default',
    colorBackgroundCodeEditorLoading: 'color-background-code-editor-loading',
    colorBackgroundCodeEditorPaneItemHover:
      'color-background-code-editor-pane-item-hover',
    colorBackgroundCodeEditorStatusBar:
      'color-background-code-editor-status-bar',
    colorBackgroundContainerContent: 'color-background-container-content',
    colorBackgroundContainerHeader: 'color-background-container-header',
    colorBackgroundControlChecked: 'color-background-control-checked',
    colorBackgroundControlDefault: 'color-background-control-default',
    colorBackgroundControlDisabled: 'color-background-control-disabled',
    colorBackgroundDropdownItemDefault:
      'color-background-dropdown-item-default',
    colorBackgroundDropdownItemDimmed: 'color-background-dropdown-item-dimmed',
    colorBackgroundDropdownItemFilterMatch:
      'color-background-dropdown-item-filter-match',
    colorBackgroundDropdownItemHover: 'color-background-dropdown-item-hover',
    colorBackgroundDropdownItemSelected:
      'color-background-dropdown-item-selected',
    colorBackgroundHomeHeader: 'color-background-home-header',
    colorBackgroundInputDefault: 'color-background-input-default',
    colorBackgroundInputDisabled: 'color-background-input-disabled',
    colorBackgroundItemSelected: 'color-background-item-selected',
    colorBackgroundLayoutMain: 'color-background-layout-main',
    colorBackgroundLayoutMobilePanel: 'color-background-layout-mobile-panel',
    colorBackgroundLayoutPanelContent: 'color-background-layout-panel-content',
    colorBackgroundLayoutPanelHover: 'color-background-layout-panel-hover',
    colorBackgroundLayoutToggleActive: 'color-background-layout-toggle-active',
    colorBackgroundLayoutToggleDefault:
      'color-background-layout-toggle-default',
    colorBackgroundLayoutToggleHover: 'color-background-layout-toggle-hover',
    colorBackgroundLayoutToggleSelectedActive:
      'color-background-layout-toggle-selected-active',
    colorBackgroundLayoutToggleSelectedDefault:
      'color-background-layout-toggle-selected-default',
    colorBackgroundLayoutToggleSelectedHover:
      'color-background-layout-toggle-selected-hover',
    colorBackgroundModalOverlay: 'color-background-modal-overlay',
    colorBackgroundNotificationBlue: 'color-background-notification-blue',
    colorBackgroundNotificationGreen: 'color-background-notification-green',
    colorBackgroundNotificationGrey: 'color-background-notification-grey',
    colorBackgroundNotificationRed: 'color-background-notification-red',
    colorBackgroundNotificationYellow: 'color-background-notification-yellow',
    colorBackgroundNotificationStackBar:
      'color-background-notification-stack-bar',
    colorBackgroundNotificationStackBarActive:
      'color-background-notification-stack-bar-active',
    colorBackgroundNotificationStackBarHover:
      'color-background-notification-stack-bar-hover',
    colorBackgroundPopover: 'color-background-popover',
    colorBackgroundProgressBarContentDefault:
      'color-background-progress-bar-content-default',
    colorBackgroundProgressBarContentInFlash:
      'color-background-progress-bar-content-in-flash',
    colorBackgroundProgressBarLayoutDefault:
      'color-background-progress-bar-layout-default',
    colorBackgroundProgressBarLayoutInFlash:
      'color-background-progress-bar-layout-in-flash',
    colorBackgroundSegmentActive: 'color-background-segment-active',
    colorBackgroundSegmentDefault: 'color-background-segment-default',
    colorBackgroundSegmentDisabled: 'color-background-segment-disabled',
    colorBackgroundSegmentHover: 'color-background-segment-hover',
    colorBackgroundSliderHandleDefault:
      'color-background-slider-handle-default',
    colorBackgroundSliderHandleActive: 'color-background-slider-handle-active',
    colorBackgroundSliderTrack: 'color-background-slider-track',
    colorBackgroundSliderHandleRing: 'color-background-slider-handle-ring',
    colorBackgroundSliderErrorPressed: 'color-background-slider-error-pressed',
    colorBackgroundSliderWarningPressed:
      'color-background-slider-warning-pressed',
    colorBackgroundStatusError: 'color-background-status-error',
    colorBackgroundStatusInfo: 'color-background-status-info',
    colorBackgroundStatusSuccess: 'color-background-status-success',
    colorBackgroundStatusWarning: 'color-background-status-warning',
    colorBackgroundTableHeader: 'color-background-table-header',
    colorBackgroundTilesDisabled: 'color-background-tiles-disabled',
    colorBackgroundToggleCheckedDisabled:
      'color-background-toggle-checked-disabled',
    colorBackgroundToggleDefault: 'color-background-toggle-default',
    colorBorderButtonNormalActive: 'color-border-button-normal-active',
    colorBorderButtonNormalDefault: 'color-border-button-normal-default',
    colorBorderButtonNormalDisabled: 'color-border-button-normal-disabled',
    colorBorderButtonNormalHover: 'color-border-button-normal-hover',
    colorBorderButtonPrimaryDisabled: 'color-border-button-primary-disabled',
    colorBorderCalendarGrid: 'color-border-calendar-grid',
    colorBorderCalendarGridSelectedFocusRing:
      'color-border-calendar-grid-selected-focus-ring',
    colorBorderCodeEditorAceActiveLineLightTheme:
      'color-border-code-editor-ace-active-line-light-theme',
    colorBorderCodeEditorAceActiveLineDarkTheme:
      'color-border-code-editor-ace-active-line-dark-theme',
    colorBorderCodeEditorDefault: 'color-border-code-editor-default',
    colorBorderCodeEditorPaneItemHover:
      'color-border-code-editor-pane-item-hover',
    colorBorderContainerDivider: 'color-border-container-divider',
    colorBorderContainerTop: 'color-border-container-top',
    colorBorderControlChecked: 'color-border-control-checked',
    colorBorderControlDefault: 'color-border-control-default',
    colorBorderControlDisabled: 'color-border-control-disabled',
    colorBorderDividerActive: 'color-border-divider-active',
    colorBorderDividerDefault: 'color-border-divider-default',
    colorBorderDividerPanelBottom: 'color-border-divider-panel-bottom',
    colorBorderDividerPanelSide: 'color-border-divider-panel-side',
    colorBorderDividerSecondary: 'color-border-divider-secondary',
    colorBorderDropdownContainer: 'color-border-dropdown-container',
    colorBorderDropdownGroup: 'color-border-dropdown-group',
    colorBorderDropdownItemDefault: 'color-border-dropdown-item-default',
    colorBorderDropdownItemHover: 'color-border-dropdown-item-hover',
    colorBorderDropdownItemDimmedHover:
      'color-border-dropdown-item-dimmed-hover',
    colorBorderDropdownItemSelected: 'color-border-dropdown-item-selected',
    colorBorderDropdownItemTop: 'color-border-dropdown-item-top',
    colorBorderEditableCellHover: 'color-border-editable-cell-hover',
    colorBorderInputDefault: 'color-border-input-default',
    colorBorderInputDisabled: 'color-border-input-disabled',
    colorBorderInputFocused: 'color-border-input-focused',
    colorBorderItemFocused: 'color-border-item-focused',
    colorBorderDropdownItemFocused: 'color-border-dropdown-item-focused',
    colorBorderItemPlaceholder: 'color-border-item-placeholder',
    colorBorderItemSelected: 'color-border-item-selected',
    colorBorderLayout: 'color-border-layout',
    colorBorderNotificationStackBar: 'color-border-notification-stack-bar',
    colorBorderPanelHeader: 'color-border-panel-header',
    colorBorderPopover: 'color-border-popover',
    colorBorderSegmentActive: 'color-border-segment-active',
    colorBorderSegmentDefault: 'color-border-segment-default',
    colorBorderSegmentDisabled: 'color-border-segment-disabled',
    colorBorderSegmentHover: 'color-border-segment-hover',
    colorBorderStatusError: 'color-border-status-error',
    colorBorderStatusInfo: 'color-border-status-info',
    colorBorderStatusSuccess: 'color-border-status-success',
    colorBorderStatusWarning: 'color-border-status-warning',
    colorBorderDividerInteractiveDefault:
      'color-border-divider-interactive-default',
    colorBorderTabsDivider: 'color-border-tabs-divider',
    colorBorderTabsShadow: 'color-border-tabs-shadow',
    colorBorderTabsUnderline: 'color-border-tabs-underline',
    colorBorderTilesDisabled: 'color-border-tiles-disabled',
    colorBorderTutorial: 'color-border-tutorial',
    colorForegroundControlDefault: 'color-foreground-control-default',
    colorForegroundControlDisabled: 'color-foreground-control-disabled',
    colorShadowDefault: 'color-shadow-default',
    colorShadowMedium: 'color-shadow-medium',
    colorShadowSide: 'color-shadow-side',
    colorStrokeChartLine: 'color-stroke-chart-line',
    colorStrokeCodeEditorResizeHandler:
      'color-stroke-code-editor-resize-handler',
    colorStrokeCodeEditorGutterActiveLineDefault:
      'color-stroke-code-editor-gutter-active-line-default',
    colorStrokeCodeEditorGutterActiveLineHover:
      'color-stroke-code-editor-gutter-active-line-hover',
    colorTextAccent: 'color-text-accent',
    colorTextBodyDefault: 'color-text-body-default',
    colorTextBodySecondary: 'color-text-body-secondary',
    colorTextBreadcrumbCurrent: 'color-text-breadcrumb-current',
    colorTextBreadcrumbIcon: 'color-text-breadcrumb-icon',
    colorTextButtonInlineIconDefault: 'color-text-button-inline-icon-default',
    colorTextButtonInlineIconDisabled:
      'color-text-button-inline-icon-disabled',
    colorTextButtonInlineIconHover: 'color-text-button-inline-icon-hover',
    colorTextButtonNormalActive: 'color-text-button-normal-active',
    colorTextButtonNormalDefault: 'color-text-button-normal-default',
    colorTextButtonNormalHover: 'color-text-button-normal-hover',
    colorTextLinkButtonNormalDefault: 'color-text-link-button-normal-default',
    colorTextLinkButtonNormalHover: 'color-text-link-button-normal-hover',
    colorTextLinkButtonNormalActive: 'color-text-link-button-normal-active',
    colorTextButtonPrimaryActive: 'color-text-button-primary-active',
    colorTextButtonPrimaryDefault: 'color-text-button-primary-default',
    colorTextButtonPrimaryHover: 'color-text-button-primary-hover',
    colorTextCalendarDateHover: 'color-text-calendar-date-hover',
    colorTextCalendarDateSelected: 'color-text-calendar-date-selected',
    colorTextCalendarMonth: 'color-text-calendar-month',
    colorTextCodeEditorGutterActiveLine:
      'color-text-code-editor-gutter-active-line',
    colorTextCodeEditorGutterDefault: 'color-text-code-editor-gutter-default',
    colorTextCodeEditorStatusBarDisabled:
      'color-text-code-editor-status-bar-disabled',
    colorTextCodeEditorTabButtonError:
      'color-text-code-editor-tab-button-error',
    colorTextColumnHeader: 'color-text-column-header',
    colorTextColumnSortingIcon: 'color-text-column-sorting-icon',
    colorTextControlDisabled: 'color-text-control-disabled',
    colorTextCounter: 'color-text-counter',
    colorTextDisabled: 'color-text-disabled',
    colorTextDisabledInlineEdit: 'color-text-disabled-inline-edit',
    colorTextDropdownFooter: 'color-text-dropdown-footer',
    colorTextDropdownGroupLabel: 'color-text-dropdown-group-label',
    colorTextDropdownItemDefault: 'color-text-dropdown-item-default',
    colorTextDropdownItemDimmed: 'color-text-dropdown-item-dimmed',
    colorTextDropdownItemDisabled: 'color-text-dropdown-item-disabled',
    colorTextDropdownItemFilterMatch: 'color-text-dropdown-item-filter-match',
    colorTextDropdownItemHighlighted: 'color-text-dropdown-item-highlighted',
    colorTextDropdownItemSecondary: 'color-text-dropdown-item-secondary',
    colorTextDropdownItemSecondaryHover:
      'color-text-dropdown-item-secondary-hover',
    colorTextEmpty: 'color-text-empty',
    colorTextExpandableSectionDefault: 'color-text-expandable-section-default',
    colorTextExpandableSectionHover: 'color-text-expandable-section-hover',
    colorTextExpandableSectionNavigationIconDefault:
      'color-text-expandable-section-navigation-icon-default',
    colorTextFormDefault: 'color-text-form-default',
    colorTextFormLabel: 'color-text-form-label',
    colorTextFormSecondary: 'color-text-form-secondary',
    colorTextGroupLabel: 'color-text-group-label',
    colorTextLabelGenAi: 'color-text-label-gen-ai',
    colorTextHeadingDefault: 'color-text-heading-default',
    colorTextHeadingSecondary: 'color-text-heading-secondary',
    colorTextHomeHeaderDefault: 'color-text-home-header-default',
    colorTextHomeHeaderSecondary: 'color-text-home-header-secondary',
    colorTextIconCaret: 'color-text-icon-caret',
    colorTextIconSubtle: 'color-text-icon-subtle',
    colorTextInputDisabled: 'color-text-input-disabled',
    colorTextInputPlaceholder: 'color-text-input-placeholder',
    colorTextInputPlaceholderDisabled: 'color-text-input-placeholder-disabled',
    colorTextInteractiveActive: 'color-text-interactive-active',
    colorTextInteractiveDefault: 'color-text-interactive-default',
    colorTextInteractiveDisabled: 'color-text-interactive-disabled',
    colorTextInteractiveHover: 'color-text-interactive-hover',
    colorTextInteractiveInvertedDefault:
      'color-text-interactive-inverted-default',
    colorTextInteractiveInvertedHover: 'color-text-interactive-inverted-hover',
    colorTextInverted: 'color-text-inverted',
    colorTextLabel: 'color-text-label',
    colorTextLayoutToggle: 'color-text-layout-toggle',
    colorTextLayoutToggleActive: 'color-text-layout-toggle-active',
    colorTextLayoutToggleHover: 'color-text-layout-toggle-hover',
    colorTextLayoutToggleSelected: 'color-text-layout-toggle-selected',
    colorTextLinkDefault: 'color-text-link-default',
    colorTextLinkHover: 'color-text-link-hover',
    colorTextLinkInvertedHover: 'color-text-link-inverted-hover',
    colorTextLinkButtonUnderline: 'color-text-link-button-underline',
    colorTextLinkButtonUnderlineHover:
      'color-text-link-button-underline-hover',
    colorTextNotificationDefault: 'color-text-notification-default',
    colorTextNotificationStackBar: 'color-text-notification-stack-bar',
    colorTextNotificationYellow: 'color-text-notification-yellow',
    colorTextPaginationPageNumberActiveDisabled:
      'color-text-pagination-page-number-active-disabled',
    colorTextPaginationPageNumberDefault:
      'color-text-pagination-page-number-default',
    colorTextSegmentActive: 'color-text-segment-active',
    colorTextSegmentDefault: 'color-text-segment-default',
    colorTextSegmentHover: 'color-text-segment-hover',
    colorTextSmall: 'color-text-small',
    colorTextStatusError: 'color-text-status-error',
    colorTextStatusInactive: 'color-text-status-inactive',
    colorTextStatusInfo: 'color-text-status-info',
    colorTextStatusSuccess: 'color-text-status-success',
    colorTextStatusWarning: 'color-text-status-warning',
    colorTextTopNavigationTitle: 'color-text-top-navigation-title',
    colorBoardPlaceholderActive: 'color-board-placeholder-active',
    colorBoardPlaceholderHover: 'color-board-placeholder-hover',
    colorDragPlaceholderActive: 'color-drag-placeholder-active',
    colorDragPlaceholderHover: 'color-drag-placeholder-hover',
    colorDropzoneBackgroundActive: 'color-dropzone-background-active',
    colorDropzoneBackgroundHover: 'color-dropzone-background-hover',
    colorDropzoneTextActive: 'color-dropzone-text-active',
    colorDropzoneTextHover: 'color-dropzone-text-hover',
    fontBoxValueLargeWeight: 'font-box-value-large-weight',
    fontButtonLetterSpacing: 'font-button-letter-spacing',
    fontButtonWeight: 'font-button-weight',
    fontChartDetailSize: 'font-chart-detail-size',
    fontDisplayLabelWeight: 'font-display-label-weight',
    fontExpandableHeadingSize: 'font-expandable-heading-size',
    fontFamilyBase: 'font-family-base',
    fontFamilyMonospace: 'font-family-monospace',
    fontHeaderH2DescriptionLineHeight:
      'font-header-h2-description-line-height',
    fontHeaderH2DescriptionSize: 'font-header-h2-description-size',
    fontLinkButtonLetterSpacing: 'font-link-button-letter-spacing',
    fontLinkButtonWeight: 'font-link-button-weight',
    fontPanelHeaderLineHeight: 'font-panel-header-line-height',
    fontPanelHeaderSize: 'font-panel-header-size',
    fontSizeBodyM: 'font-size-body-m',
    fontSizeBodyS: 'font-size-body-s',
    fontSizeDisplayL: 'font-size-display-l',
    fontSizeHeadingXl: 'font-size-heading-xl',
    fontSizeHeadingL: 'font-size-heading-l',
    fontSizeHeadingM: 'font-size-heading-m',
    fontSizeHeadingS: 'font-size-heading-s',
    fontSizeHeadingXs: 'font-size-heading-xs',
    fontSmoothingMozOsx: 'font-smoothing-moz-osx',
    fontSmoothingWebkit: 'font-smoothing-webkit',
    fontTabsDisabledWeight: 'font-tabs-disabled-weight',
    fontTabsLineHeight: 'font-tabs-line-height',
    fontTabsSize: 'font-tabs-size',
    fontWayfindingLinkActiveWeight: 'font-wayfinding-link-active-weight',
    fontWeightHeadingXl: 'font-weight-heading-xl',
    fontWeightHeadingL: 'font-weight-heading-l',
    fontWeightHeadingM: 'font-weight-heading-m',
    fontWeightHeadingS: 'font-weight-heading-s',
    fontWeightHeadingXs: 'font-weight-heading-xs',
    fontWeightHeavy: 'font-weight-heavy',
    letterSpacingBodyS: 'letter-spacing-body-s',
    letterSpacingDisplayL: 'letter-spacing-display-l',
    letterSpacingHeadingXl: 'letter-spacing-heading-xl',
    letterSpacingHeadingL: 'letter-spacing-heading-l',
    letterSpacingHeadingM: 'letter-spacing-heading-m',
    letterSpacingHeadingS: 'letter-spacing-heading-s',
    lineHeightBodyM: 'line-height-body-m',
    lineHeightBodyS: 'line-height-body-s',
    lineHeightDisplayL: 'line-height-display-l',
    lineHeightHeadingXl: 'line-height-heading-xl',
    lineHeightHeadingL: 'line-height-heading-l',
    lineHeightHeadingM: 'line-height-heading-m',
    lineHeightHeadingS: 'line-height-heading-s',
    lineHeightHeadingXs: 'line-height-heading-xs',
    borderActiveWidth: 'border-active-width',
    borderCodeEditorStatusDividerWidth:
      'border-code-editor-status-divider-width',
    borderContainerStickyWidth: 'border-container-sticky-width',
    borderContainerTopWidth: 'border-container-top-width',
    borderControlFocusRingShadowSpread:
      'border-control-focus-ring-shadow-spread',
    borderControlInvalidFocusRingShadowSpread:
      'border-control-invalid-focus-ring-shadow-spread',
    borderDividerListWidth: 'border-divider-list-width',
    borderDividerSectionWidth: 'border-divider-section-width',
    borderDropdownVirtualOffsetWidth: 'border-dropdown-virtual-offset-width',
    borderFieldWidth: 'border-field-width',
    borderInvalidWidth: 'border-invalid-width',
    borderItemWidth: 'border-item-width',
    borderLineChartDashArray: 'border-line-chart-dash-array',
    borderLineChartLineJoin: 'border-line-chart-line-join',
    borderLineChartWidth: 'border-line-chart-width',
    borderPanelHeaderWidth: 'border-panel-header-width',
    borderPanelTopWidth: 'border-panel-top-width',
    borderRadiusAlert: 'border-radius-alert',
    borderRadiusBadge: 'border-radius-badge',
    borderRadiusButton: 'border-radius-button',
    borderRadiusCalendarDayFocusRing: 'border-radius-calendar-day-focus-ring',
    borderRadiusCodeEditor: 'border-radius-code-editor',
    borderRadiusContainer: 'border-radius-container',
    borderRadiusControlCircularFocusRing:
      'border-radius-control-circular-focus-ring',
    borderRadiusControlDefaultFocusRing:
      'border-radius-control-default-focus-ring',
    borderRadiusDropdown: 'border-radius-dropdown',
    borderRadiusDropzone: 'border-radius-dropzone',
    borderRadiusFlashbar: 'border-radius-flashbar',
    borderRadiusItem: 'border-radius-item',
    borderRadiusInput: 'border-radius-input',
    borderRadiusPopover: 'border-radius-popover',
    borderRadiusTabsFocusRing: 'border-radius-tabs-focus-ring',
    borderRadiusTiles: 'border-radius-tiles',
    borderRadiusToken: 'border-radius-token',
    borderRadiusTutorialPanelItem: 'border-radius-tutorial-panel-item',
    borderTableStickyWidth: 'border-table-sticky-width',
    borderLinkFocusRingOutline: 'border-link-focus-ring-outline',
    borderLinkFocusRingShadowSpread: 'border-link-focus-ring-shadow-spread',
    motionDurationExtraFast: 'motion-duration-extra-fast',
    motionDurationExtraSlow: 'motion-duration-extra-slow',
    motionDurationFast: 'motion-duration-fast',
    motionDurationModerate: 'motion-duration-moderate',
    motionDurationRefreshOnlyAmbient: 'motion-duration-refresh-only-ambient',
    motionDurationRefreshOnlyFast: 'motion-duration-refresh-only-fast',
    motionDurationRefreshOnlyMedium: 'motion-duration-refresh-only-medium',
    motionDurationRefreshOnlySlow: 'motion-duration-refresh-only-slow',
    motionDurationRotate180: 'motion-duration-rotate-180',
    motionDurationRotate90: 'motion-duration-rotate-90',
    motionDurationShowPaced: 'motion-duration-show-paced',
    motionDurationShowQuick: 'motion-duration-show-quick',
    motionDurationSlow: 'motion-duration-slow',
    motionDurationTransitionQuick: 'motion-duration-transition-quick',
    motionDurationTransitionShowPaced: 'motion-duration-transition-show-paced',
    motionDurationTransitionShowQuick: 'motion-duration-transition-show-quick',
    motionEasingEaseOutQuart: 'motion-easing-ease-out-quart',
    motionEasingRefreshOnlyA: 'motion-easing-refresh-only-a',
    motionEasingRefreshOnlyB: 'motion-easing-refresh-only-b',
    motionEasingRefreshOnlyC: 'motion-easing-refresh-only-c',
    motionEasingRefreshOnlyD: 'motion-easing-refresh-only-d',
    motionEasingRotate180: 'motion-easing-rotate-180',
    motionEasingRotate90: 'motion-easing-rotate-90',
    motionEasingShowPaced: 'motion-easing-show-paced',
    motionEasingShowQuick: 'motion-easing-show-quick',
    motionEasingTransitionQuick: 'motion-easing-transition-quick',
    motionEasingTransitionShowPaced: 'motion-easing-transition-show-paced',
    motionEasingTransitionShowQuick: 'motion-easing-transition-show-quick',
    motionEasingResponsive: 'motion-easing-responsive',
    motionEasingSticky: 'motion-easing-sticky',
    motionEasingExpressive: 'motion-easing-expressive',
    motionDurationResponsive: 'motion-duration-responsive',
    motionDurationExpressive: 'motion-duration-expressive',
    motionDurationComplex: 'motion-duration-complex',
    motionKeyframesFadeIn: 'motion-keyframes-fade-in',
    motionKeyframesFadeOut: 'motion-keyframes-fade-out',
    motionKeyframesStatusIconError: 'motion-keyframes-status-icon-error',
    motionKeyframesScalePopup: 'motion-keyframes-scale-popup',
    sizeCalendarGridWidth: 'size-calendar-grid-width',
    sizeControl: 'size-control',
    sizeIconBig: 'size-icon-big',
    sizeIconLarge: 'size-icon-large',
    sizeIconMedium: 'size-icon-medium',
    sizeIconNormal: 'size-icon-normal',
    sizeTableSelectionHorizontal: 'size-table-selection-horizontal',
    sizeVerticalInput: 'size-vertical-input',
    sizeVerticalPanelIconOffset: 'size-vertical-panel-icon-offset',
    spaceAlertActionLeft: 'space-alert-action-left',
    spaceAlertHorizontal: 'space-alert-horizontal',
    spaceAlertMessageRight: 'space-alert-message-right',
    spaceAlertVertical: 'space-alert-vertical',
    spaceButtonFocusOutlineGutter: 'space-button-focus-outline-gutter',
    spaceButtonHorizontal: 'space-button-horizontal',
    spaceButtonIconFocusOutlineGutterVertical:
      'space-button-icon-focus-outline-gutter-vertical',
    spaceButtonIconOnlyHorizontal: 'space-button-icon-only-horizontal',
    spaceButtonInlineIconFocusOutlineGutter:
      'space-button-inline-icon-focus-outline-gutter',
    spaceButtonModalDismissVertical: 'space-button-modal-dismiss-vertical',
    spaceCalendarGridFocusOutlineGutter:
      'space-calendar-grid-focus-outline-gutter',
    spaceCalendarGridSelectedFocusOutlineGutter:
      'space-calendar-grid-selected-focus-outline-gutter',
    spaceCalendarGridGutter: 'space-calendar-grid-gutter',
    spaceCardHorizontal: 'space-card-horizontal',
    spaceCardVertical: 'space-card-vertical',
    spaceCodeEditorStatusFocusOutlineGutter:
      'space-code-editor-status-focus-outline-gutter',
    spaceContainerContentTop: 'space-container-content-top',
    spaceContainerHeaderTop: 'space-container-header-top',
    spaceContainerHeaderBottom: 'space-container-header-bottom',
    spaceContainerHorizontal: 'space-container-horizontal',
    spaceContentHeaderPaddingBottom: 'space-content-header-padding-bottom',
    spaceDarkHeaderOverlapDistance: 'space-dark-header-overlap-distance',
    spaceExpandableSectionIconOffsetTop:
      'space-expandable-section-icon-offset-top',
    spaceFieldHorizontal: 'space-field-horizontal',
    spaceFieldIconOffset: 'space-field-icon-offset',
    spaceFilteringTokenDismissButtonFocusOutlineGutter:
      'space-filtering-token-dismiss-button-focus-outline-gutter',
    spaceFilteringTokenOperationSelectFocusOutlineGutter:
      'space-filtering-token-operation-select-focus-outline-gutter',
    spaceFlashbarActionLeft: 'space-flashbar-action-left',
    spaceFlashbarDismissRight: 'space-flashbar-dismiss-right',
    spaceFlashbarHorizontal: 'space-flashbar-horizontal',
    spaceGridGutter: 'space-grid-gutter',
    spaceKeyValueGap: 'space-key-value-gap',
    spaceLayoutContentBottom: 'space-layout-content-bottom',
    spaceLayoutContentHorizontal: 'space-layout-content-horizontal',
    spaceLayoutToggleDiameter: 'space-layout-toggle-diameter',
    spaceLayoutTogglePadding: 'space-layout-toggle-padding',
    spaceModalContentBottom: 'space-modal-content-bottom',
    spaceModalHorizontal: 'space-modal-horizontal',
    spaceOptionIconBigTop: 'space-option-icon-big-top',
    spacePanelContentBottom: 'space-panel-content-bottom',
    spacePanelContentTop: 'space-panel-content-top',
    spacePanelDividerMarginHorizontal: 'space-panel-divider-margin-horizontal',
    spacePanelHeaderVertical: 'space-panel-header-vertical',
    spacePanelNavLeft: 'space-panel-nav-left',
    spacePanelSideLeft: 'space-panel-side-left',
    spacePanelSideRight: 'space-panel-side-right',
    spacePanelSplitTop: 'space-panel-split-top',
    spacePanelSplitBottom: 'space-panel-split-bottom',
    spaceSegmentedControlFocusOutlineGutter:
      'space-segmented-control-focus-outline-gutter',
    spaceTabsContentTop: 'space-tabs-content-top',
    spaceTabsFocusOutlineGutter: 'space-tabs-focus-outline-gutter',
    spaceTableContentBottom: 'space-table-content-bottom',
    spaceTableEmbeddedHeaderTop: 'space-table-embedded-header-top',
    spaceTableFooterHorizontal: 'space-table-footer-horizontal',
    spaceTableHeaderFocusOutlineGutter:
      'space-table-header-focus-outline-gutter',
    spaceTableHeaderHorizontal: 'space-table-header-horizontal',
    spaceTableHeaderToolsBottom: 'space-table-header-tools-bottom',
    spaceTableHeaderToolsFullPageBottom:
      'space-table-header-tools-full-page-bottom',
    spaceTableHorizontal: 'space-table-horizontal',
    spaceScaled2xNone: 'space-scaled-2x-none',
    spaceScaled2xXxxs: 'space-scaled-2x-xxxs',
    spaceScaled2xXxs: 'space-scaled-2x-xxs',
    spaceScaled2xXs: 'space-scaled-2x-xs',
    spaceScaled2xS: 'space-scaled-2x-s',
    spaceScaled2xM: 'space-scaled-2x-m',
    spaceScaled2xL: 'space-scaled-2x-l',
    spaceScaled2xXl: 'space-scaled-2x-xl',
    spaceScaled2xXxl: 'space-scaled-2x-xxl',
    spaceScaled2xXxxl: 'space-scaled-2x-xxxl',
    spaceScaledNone: 'space-scaled-none',
    spaceScaledXxxs: 'space-scaled-xxxs',
    spaceScaledXxs: 'space-scaled-xxs',
    spaceScaledXs: 'space-scaled-xs',
    spaceScaledS: 'space-scaled-s',
    spaceScaledM: 'space-scaled-m',
    spaceScaledL: 'space-scaled-l',
    spaceScaledXl: 'space-scaled-xl',
    spaceScaledXxl: 'space-scaled-xxl',
    spaceScaledXxxl: 'space-scaled-xxxl',
    spaceStaticXxxs: 'space-static-xxxs',
    spaceStaticXxs: 'space-static-xxs',
    spaceStaticXs: 'space-static-xs',
    spaceStaticS: 'space-static-s',
    spaceStaticM: 'space-static-m',
    spaceStaticL: 'space-static-l',
    spaceStaticXl: 'space-static-xl',
    spaceStaticXxl: 'space-static-xxl',
    spaceStaticXxxl: 'space-static-xxxl',
    spaceNone: 'space-none',
    spaceXxxs: 'space-xxxs',
    spaceXxs: 'space-xxs',
    spaceXs: 'space-xs',
    spaceS: 'space-s',
    spaceM: 'space-m',
    spaceL: 'space-l',
    spaceXl: 'space-xl',
    spaceXxl: 'space-xxl',
    spaceXxxl: 'space-xxxl',
    shadowContainer: 'shadow-container',
    shadowContainerStacked: 'shadow-container-stacked',
    shadowContainerActive: 'shadow-container-active',
    shadowDropdown: 'shadow-dropdown',
    shadowDropup: 'shadow-dropup',
    shadowFlashCollapsed: 'shadow-flash-collapsed',
    shadowFlashSticky: 'shadow-flash-sticky',
    shadowModal: 'shadow-modal',
    shadowPanel: 'shadow-panel',
    shadowPanelToggle: 'shadow-panel-toggle',
    shadowPopover: 'shadow-popover',
    shadowSplitBottom: 'shadow-split-bottom',
    shadowSplitSide: 'shadow-split-side',
    shadowSticky: 'shadow-sticky',
    shadowStickyEmbedded: 'shadow-sticky-embedded',
    shadowStickyColumnFirst: 'shadow-sticky-column-first',
    shadowStickyColumnLast: 'shadow-sticky-column-last'
  },
  propertiesMap: {
    colorAmazonOrange: '--color-amazon-orange-dcxy3n',
    colorAwsSquidInk: '--color-aws-squid-ink-wev0yb',
    colorBlack: '--color-black-6gnsaf',
    colorBlue100: '--color-blue-100-s0lthf',
    colorBlue200: '--color-blue-200-3iuruh',
    colorBlue300: '--color-blue-300-5bc5a5',
    colorBlue400: '--color-blue-400-xfzode',
    colorBlue500: '--color-blue-500-dedkl7',
    colorBlue600: '--color-blue-600-4n095u',
    colorBlue700: '--color-blue-700-b8t1cu',
    colorBlue800: '--color-blue-800-62wapa',
    colorBlue900: '--color-blue-900-j7s36e',
    colorBlueOpaque: '--color-blue-opaque-2atokp',
    colorGreen100: '--color-green-100-cuwn8b',
    colorGreen500: '--color-green-500-g81ft6',
    colorGreen600: '--color-green-600-5uipe9',
    colorGreen700: '--color-green-700-00t53y',
    colorGreen900: '--color-green-900-ofg75y',
    colorGrey100: '--color-grey-100-8s60b9',
    colorGrey125: '--color-grey-125-h55xoq',
    colorGrey150: '--color-grey-150-kxedow',
    colorGrey200: '--color-grey-200-o7cpyn',
    colorGrey300: '--color-grey-300-8dni60',
    colorGrey350: '--color-grey-350-zbt65f',
    colorGrey400: '--color-grey-400-dqlt0n',
    colorGrey450: '--color-grey-450-1hrs3y',
    colorGrey500: '--color-grey-500-kxms6b',
    colorGrey550: '--color-grey-550-y53vn1',
    colorGrey600: '--color-grey-600-swg9lb',
    colorGrey650: '--color-grey-650-w71zng',
    colorGrey700: '--color-grey-700-xlj977',
    colorGrey750: '--color-grey-750-g0m6jx',
    colorGrey800: '--color-grey-800-spqvyb',
    colorGrey850: '--color-grey-850-7heqpl',
    colorGrey900: '--color-grey-900-3usw7j',
    colorGrey950: '--color-grey-950-80rmsr',
    colorOrange100: '--color-orange-100-09cwkv',
    colorOrange500: '--color-orange-500-yafgw8',
    colorOrange600: '--color-orange-600-i4llm3',
    colorOrange700: '--color-orange-700-pa17lx',
    colorPurple400: '--color-purple-400-do17e4',
    colorPurple600: '--color-purple-600-3poi7g',
    colorRed100: '--color-red-100-vehl14',
    colorRed500: '--color-red-500-1sdgiw',
    colorRed600: '--color-red-600-h9inyt',
    colorRed700: '--color-red-700-kj6l7e',
    colorRed900: '--color-red-900-tyyy6a',
    colorTransparent: '--color-transparent-avnyrh',
    colorWhite: '--color-white-auls7t',
    colorYellow100: '--color-yellow-100-3g0yfe',
    colorYellow600: '--color-yellow-600-hpqd39',
    colorYellow700: '--color-yellow-700-4kszz3',
    colorYellow800: '--color-yellow-800-qllbel',
    colorYellow900: '--color-yellow-900-s0rjc9',
    colorChartsRed300: '--color-charts-red-300-f7f8xq',
    colorChartsRed400: '--color-charts-red-400-jou54k',
    colorChartsRed500: '--color-charts-red-500-da951i',
    colorChartsRed600: '--color-charts-red-600-ejcs7e',
    colorChartsRed700: '--color-charts-red-700-8acqbh',
    colorChartsRed800: '--color-charts-red-800-5izwn0',
    colorChartsRed900: '--color-charts-red-900-4jwqgh',
    colorChartsRed1000: '--color-charts-red-1000-u7lfhu',
    colorChartsRed1100: '--color-charts-red-1100-f8vaud',
    colorChartsRed1200: '--color-charts-red-1200-l357rr',
    colorChartsOrange300: '--color-charts-orange-300-yudfmw',
    colorChartsOrange400: '--color-charts-orange-400-kc2a8v',
    colorChartsOrange500: '--color-charts-orange-500-0gojbo',
    colorChartsOrange600: '--color-charts-orange-600-e6bct4',
    colorChartsOrange700: '--color-charts-orange-700-kvr6dc',
    colorChartsOrange800: '--color-charts-orange-800-u78rle',
    colorChartsOrange900: '--color-charts-orange-900-knbn1g',
    colorChartsOrange1000: '--color-charts-orange-1000-2j84b8',
    colorChartsOrange1100: '--color-charts-orange-1100-jrm553',
    colorChartsOrange1200: '--color-charts-orange-1200-owvbqi',
    colorChartsYellow300: '--color-charts-yellow-300-n5un5a',
    colorChartsYellow400: '--color-charts-yellow-400-yxj6uc',
    colorChartsYellow500: '--color-charts-yellow-500-6v41aq',
    colorChartsYellow600: '--color-charts-yellow-600-fzfjqh',
    colorChartsYellow700: '--color-charts-yellow-700-zkf570',
    colorChartsYellow800: '--color-charts-yellow-800-yh1t85',
    colorChartsYellow900: '--color-charts-yellow-900-poq0s2',
    colorChartsYellow1000: '--color-charts-yellow-1000-ad8iic',
    colorChartsYellow1100: '--color-charts-yellow-1100-526cee',
    colorChartsYellow1200: '--color-charts-yellow-1200-s3kdo2',
    colorChartsGreen300: '--color-charts-green-300-x0vh20',
    colorChartsGreen400: '--color-charts-green-400-lfs5ej',
    colorChartsGreen500: '--color-charts-green-500-8bop7r',
    colorChartsGreen600: '--color-charts-green-600-fuf469',
    colorChartsGreen700: '--color-charts-green-700-6klb1z',
    colorChartsGreen800: '--color-charts-green-800-jqzaeo',
    colorChartsGreen900: '--color-charts-green-900-amcp46',
    colorChartsGreen1000: '--color-charts-green-1000-q2tq7s',
    colorChartsGreen1100: '--color-charts-green-1100-79vctm',
    colorChartsGreen1200: '--color-charts-green-1200-qzk0b5',
    colorChartsTeal300: '--color-charts-teal-300-4p75ri',
    colorChartsTeal400: '--color-charts-teal-400-rgvkuu',
    colorChartsTeal500: '--color-charts-teal-500-cuuzle',
    colorChartsTeal600: '--color-charts-teal-600-gwujru',
    colorChartsTeal700: '--color-charts-teal-700-xc2jeg',
    colorChartsTeal800: '--color-charts-teal-800-14zeoj',
    colorChartsTeal900: '--color-charts-teal-900-hq6hao',
    colorChartsTeal1000: '--color-charts-teal-1000-7212xb',
    colorChartsTeal1100: '--color-charts-teal-1100-ajeicp',
    colorChartsTeal1200: '--color-charts-teal-1200-hidh3v',
    colorChartsBlue1300: '--color-charts-blue-1-300-euudk7',
    colorChartsBlue1400: '--color-charts-blue-1-400-6hylwi',
    colorChartsBlue1500: '--color-charts-blue-1-500-kr4cau',
    colorChartsBlue1600: '--color-charts-blue-1-600-ms2smi',
    colorChartsBlue1700: '--color-charts-blue-1-700-56kvwl',
    colorChartsBlue1800: '--color-charts-blue-1-800-ijg089',
    colorChartsBlue1900: '--color-charts-blue-1-900-uo6ho7',
    colorChartsBlue11000: '--color-charts-blue-1-1000-wu8qhz',
    colorChartsBlue11100: '--color-charts-blue-1-1100-f10oda',
    colorChartsBlue11200: '--color-charts-blue-1-1200-7gnksv',
    colorChartsBlue2300: '--color-charts-blue-2-300-y1xfdo',
    colorChartsBlue2400: '--color-charts-blue-2-400-qea7op',
    colorChartsBlue2500: '--color-charts-blue-2-500-tnqdcb',
    colorChartsBlue2600: '--color-charts-blue-2-600-5rrpvq',
    colorChartsBlue2700: '--color-charts-blue-2-700-7bu240',
    colorChartsBlue2800: '--color-charts-blue-2-800-69evc1',
    colorChartsBlue2900: '--color-charts-blue-2-900-ab2mvq',
    colorChartsBlue21000: '--color-charts-blue-2-1000-xfh69o',
    colorChartsBlue21100: '--color-charts-blue-2-1100-zhd3bm',
    colorChartsBlue21200: '--color-charts-blue-2-1200-6knqpr',
    colorChartsPurple300: '--color-charts-purple-300-xnqhfz',
    colorChartsPurple400: '--color-charts-purple-400-ow8655',
    colorChartsPurple500: '--color-charts-purple-500-smhazu',
    colorChartsPurple600: '--color-charts-purple-600-7vviem',
    colorChartsPurple700: '--color-charts-purple-700-dlfumk',
    colorChartsPurple800: '--color-charts-purple-800-8htkox',
    colorChartsPurple900: '--color-charts-purple-900-4515ie',
    colorChartsPurple1000: '--color-charts-purple-1000-ndeai4',
    colorChartsPurple1100: '--color-charts-purple-1100-j4gu50',
    colorChartsPurple1200: '--color-charts-purple-1200-63w73o',
    colorChartsPink300: '--color-charts-pink-300-hoyl0w',
    colorChartsPink400: '--color-charts-pink-400-q5sezw',
    colorChartsPink500: '--color-charts-pink-500-6yzrgm',
    colorChartsPink600: '--color-charts-pink-600-x2kym1',
    colorChartsPink700: '--color-charts-pink-700-vixjla',
    colorChartsPink800: '--color-charts-pink-800-vqjnmw',
    colorChartsPink900: '--color-charts-pink-900-o1jies',
    colorChartsPink1000: '--color-charts-pink-1000-q57vlm',
    colorChartsPink1100: '--color-charts-pink-1100-7ybtdu',
    colorChartsPink1200: '--color-charts-pink-1200-kphu2j',
    colorChartsStatusCritical: '--color-charts-status-critical-3ypizj',
    colorChartsStatusHigh: '--color-charts-status-high-y7cdug',
    colorChartsStatusMedium: '--color-charts-status-medium-wauw7r',
    colorChartsStatusLow: '--color-charts-status-low-1znbz5',
    colorChartsStatusPositive: '--color-charts-status-positive-m6rmr6',
    colorChartsStatusInfo: '--color-charts-status-info-6mjaaq',
    colorChartsStatusNeutral: '--color-charts-status-neutral-imh5gx',
    colorChartsThresholdNegative: '--color-charts-threshold-negative-a92ovc',
    colorChartsThresholdPositive: '--color-charts-threshold-positive-w08v8e',
    colorChartsThresholdInfo: '--color-charts-threshold-info-2my7tb',
    colorChartsThresholdNeutral: '--color-charts-threshold-neutral-2j6ro8',
    colorChartsLineGrid: '--color-charts-line-grid-1xcsr5',
    colorChartsLineTick: '--color-charts-line-tick-lj9bpx',
    colorChartsLineAxis: '--color-charts-line-axis-1p5r06',
    colorChartsPaletteCategorical1:
      '--color-charts-palette-categorical-1-y79ydz',
    colorChartsPaletteCategorical2:
      '--color-charts-palette-categorical-2-juy1r9',
    colorChartsPaletteCategorical3:
      '--color-charts-palette-categorical-3-8ijikz',
    colorChartsPaletteCategorical4:
      '--color-charts-palette-categorical-4-p2bpxc',
    colorChartsPaletteCategorical5:
      '--color-charts-palette-categorical-5-knqfhg',
    colorChartsPaletteCategorical6:
      '--color-charts-palette-categorical-6-a44s24',
    colorChartsPaletteCategorical7:
      '--color-charts-palette-categorical-7-9czy1o',
    colorChartsPaletteCategorical8:
      '--color-charts-palette-categorical-8-b6086q',
    colorChartsPaletteCategorical9:
      '--color-charts-palette-categorical-9-kjql39',
    colorChartsPaletteCategorical10:
      '--color-charts-palette-categorical-10-ctchaq',
    colorChartsPaletteCategorical11:
      '--color-charts-palette-categorical-11-ds2mie',
    colorChartsPaletteCategorical12:
      '--color-charts-palette-categorical-12-5qchrw',
    colorChartsPaletteCategorical13:
      '--color-charts-palette-categorical-13-end5cs',
    colorChartsPaletteCategorical14:
      '--color-charts-palette-categorical-14-bw12st',
    colorChartsPaletteCategorical15:
      '--color-charts-palette-categorical-15-cfz23n',
    colorChartsPaletteCategorical16:
      '--color-charts-palette-categorical-16-cko3dz',
    colorChartsPaletteCategorical17:
      '--color-charts-palette-categorical-17-vj0bj9',
    colorChartsPaletteCategorical18:
      '--color-charts-palette-categorical-18-4dzqrd',
    colorChartsPaletteCategorical19:
      '--color-charts-palette-categorical-19-pubz74',
    colorChartsPaletteCategorical20:
      '--color-charts-palette-categorical-20-a3jo1l',
    colorChartsPaletteCategorical21:
      '--color-charts-palette-categorical-21-o56uyb',
    colorChartsPaletteCategorical22:
      '--color-charts-palette-categorical-22-pvirkq',
    colorChartsPaletteCategorical23:
      '--color-charts-palette-categorical-23-rzndcw',
    colorChartsPaletteCategorical24:
      '--color-charts-palette-categorical-24-cy4txc',
    colorChartsPaletteCategorical25:
      '--color-charts-palette-categorical-25-4jc1o6',
    colorChartsPaletteCategorical26:
      '--color-charts-palette-categorical-26-1yo8hz',
    colorChartsPaletteCategorical27:
      '--color-charts-palette-categorical-27-5guvxw',
    colorChartsPaletteCategorical28:
      '--color-charts-palette-categorical-28-9hue4x',
    colorChartsPaletteCategorical29:
      '--color-charts-palette-categorical-29-19c4i4',
    colorChartsPaletteCategorical30:
      '--color-charts-palette-categorical-30-7fgw4h',
    colorChartsPaletteCategorical31:
      '--color-charts-palette-categorical-31-xb2tye',
    colorChartsPaletteCategorical32:
      '--color-charts-palette-categorical-32-x4xe33',
    colorChartsPaletteCategorical33:
      '--color-charts-palette-categorical-33-sw8npa',
    colorChartsPaletteCategorical34:
      '--color-charts-palette-categorical-34-7hukor',
    colorChartsPaletteCategorical35:
      '--color-charts-palette-categorical-35-a16s1z',
    colorChartsPaletteCategorical36:
      '--color-charts-palette-categorical-36-5r8ty9',
    colorChartsPaletteCategorical37:
      '--color-charts-palette-categorical-37-r03ka9',
    colorChartsPaletteCategorical38:
      '--color-charts-palette-categorical-38-xqnf8o',
    colorChartsPaletteCategorical39:
      '--color-charts-palette-categorical-39-p2tcaw',
    colorChartsPaletteCategorical40:
      '--color-charts-palette-categorical-40-vkhrwz',
    colorChartsPaletteCategorical41:
      '--color-charts-palette-categorical-41-d3fc0r',
    colorChartsPaletteCategorical42:
      '--color-charts-palette-categorical-42-1xjdse',
    colorChartsPaletteCategorical43:
      '--color-charts-palette-categorical-43-a6rqal',
    colorChartsPaletteCategorical44:
      '--color-charts-palette-categorical-44-qiluwk',
    colorChartsPaletteCategorical45:
      '--color-charts-palette-categorical-45-r65nzh',
    colorChartsPaletteCategorical46:
      '--color-charts-palette-categorical-46-9mw49y',
    colorChartsPaletteCategorical47:
      '--color-charts-palette-categorical-47-n7c1o0',
    colorChartsPaletteCategorical48:
      '--color-charts-palette-categorical-48-0pc749',
    colorChartsPaletteCategorical49:
      '--color-charts-palette-categorical-49-mo6mxl',
    colorChartsPaletteCategorical50:
      '--color-charts-palette-categorical-50-yroyet',
    colorGreyOpaque25: '--color-grey-opaque-25-5q613j',
    colorGreyOpaque40: '--color-grey-opaque-40-jm9e00',
    colorGreyOpaque50: '--color-grey-opaque-50-cny2xh',
    colorGreyOpaque70: '--color-grey-opaque-70-auybx2',
    colorGreyOpaque80: '--color-grey-opaque-80-ee4stt',
    colorGreyOpaque90: '--color-grey-opaque-90-rwd78u',
    colorGreyTransparent: '--color-grey-transparent-r5nw7r',
    colorGreyTransparentHeavy: '--color-grey-transparent-heavy-qtl1l1',
    colorGreyTransparentLight: '--color-grey-transparent-light-umhepp',
    colorBackgroundBadgeIcon: '--color-background-badge-icon-5gt3lc',
    colorBackgroundButtonLinkActive:
      '--color-background-button-link-active-li84xa',
    colorBackgroundButtonLinkHover:
      '--color-background-button-link-hover-c4uiaf',
    colorBackgroundButtonNormalActive:
      '--color-background-button-normal-active-r3oxzv',
    colorBackgroundButtonNormalDefault:
      '--color-background-button-normal-default-k8i6b0',
    colorBackgroundButtonNormalDisabled:
      '--color-background-button-normal-disabled-puusfc',
    colorBackgroundButtonNormalHover:
      '--color-background-button-normal-hover-yqjern',
    colorBackgroundButtonPrimaryActive:
      '--color-background-button-primary-active-rz38q7',
    colorBackgroundButtonPrimaryDefault:
      '--color-background-button-primary-default-f3veih',
    colorBackgroundButtonPrimaryDisabled:
      '--color-background-button-primary-disabled-lba03m',
    colorBackgroundButtonPrimaryHover:
      '--color-background-button-primary-hover-79i9hj',
    colorBackgroundCalendarCurrentDate:
      '--color-background-calendar-current-date-wm9kva',
    colorBackgroundCellShaded: '--color-background-cell-shaded-zw6xp4',
    colorBackgroundCodeEditorGutterActiveLineDefault:
      '--color-background-code-editor-gutter-active-line-default-mmq122',
    colorBackgroundCodeEditorGutterActiveLineError:
      '--color-background-code-editor-gutter-active-line-error-kp33q7',
    colorBackgroundCodeEditorGutterDefault:
      '--color-background-code-editor-gutter-default-qw8v9i',
    colorBackgroundCodeEditorLoading:
      '--color-background-code-editor-loading-6bioe0',
    colorBackgroundCodeEditorPaneItemHover:
      '--color-background-code-editor-pane-item-hover-aa7kp2',
    colorBackgroundCodeEditorStatusBar:
      '--color-background-code-editor-status-bar-ymmryk',
    colorBackgroundContainerContent:
      '--color-background-container-content-il2pe5',
    colorBackgroundContainerHeader:
      '--color-background-container-header-ni4jv3',
    colorBackgroundControlChecked: '--color-background-control-checked-pvanxo',
    colorBackgroundControlDefault: '--color-background-control-default-n6yadr',
    colorBackgroundControlDisabled:
      '--color-background-control-disabled-dsn0t2',
    colorBackgroundDropdownItemDefault:
      '--color-background-dropdown-item-default-s7k0er',
    colorBackgroundDropdownItemDimmed:
      '--color-background-dropdown-item-dimmed-e83q5u',
    colorBackgroundDropdownItemFilterMatch:
      '--color-background-dropdown-item-filter-match-nyh5xa',
    colorBackgroundDropdownItemHover:
      '--color-background-dropdown-item-hover-i8ac7r',
    colorBackgroundDropdownItemSelected:
      '--color-background-dropdown-item-selected-u5p3gx',
    colorBackgroundHomeHeader: '--color-background-home-header-zm6w39',
    colorBackgroundInputDefault: '--color-background-input-default-w7mbz6',
    colorBackgroundInputDisabled: '--color-background-input-disabled-zfoobi',
    colorBackgroundItemSelected: '--color-background-item-selected-dbqvjr',
    colorBackgroundLayoutMain: '--color-background-layout-main-td853a',
    colorBackgroundLayoutMobilePanel:
      '--color-background-layout-mobile-panel-8tuodx',
    colorBackgroundLayoutPanelContent:
      '--color-background-layout-panel-content-ml98gw',
    colorBackgroundLayoutPanelHover:
      '--color-background-layout-panel-hover-58t7r5',
    colorBackgroundLayoutToggleActive:
      '--color-background-layout-toggle-active-exdw75',
    colorBackgroundLayoutToggleDefault:
      '--color-background-layout-toggle-default-6tvwtb',
    colorBackgroundLayoutToggleHover:
      '--color-background-layout-toggle-hover-o8pq7y',
    colorBackgroundLayoutToggleSelectedActive:
      '--color-background-layout-toggle-selected-active-gdlg1f',
    colorBackgroundLayoutToggleSelectedDefault:
      '--color-background-layout-toggle-selected-default-rmibh3',
    colorBackgroundLayoutToggleSelectedHover:
      '--color-background-layout-toggle-selected-hover-3l4zzu',
    colorBackgroundModalOverlay: '--color-background-modal-overlay-b4swet',
    colorBackgroundNotificationBlue:
      '--color-background-notification-blue-xgzcj2',
    colorBackgroundNotificationGreen:
      '--color-background-notification-green-igmdlm',
    colorBackgroundNotificationGrey:
      '--color-background-notification-grey-hf7l1x',
    colorBackgroundNotificationRed:
      '--color-background-notification-red-k9i8vf',
    colorBackgroundNotificationYellow:
      '--color-background-notification-yellow-jc5ibh',
    colorBackgroundNotificationStackBar:
      '--color-background-notification-stack-bar-990zt6',
    colorBackgroundNotificationStackBarActive:
      '--color-background-notification-stack-bar-active-pfly17',
    colorBackgroundNotificationStackBarHover:
      '--color-background-notification-stack-bar-hover-lt97pm',
    colorBackgroundPopover: '--color-background-popover-7gvi00',
    colorBackgroundProgressBarContentDefault:
      '--color-background-progress-bar-content-default-6mb079',
    colorBackgroundProgressBarContentInFlash:
      '--color-background-progress-bar-content-in-flash-6k3gbt',
    colorBackgroundProgressBarLayoutDefault:
      '--color-background-progress-bar-layout-default-d4fh0m',
    colorBackgroundProgressBarLayoutInFlash:
      '--color-background-progress-bar-layout-in-flash-npacz8',
    colorBackgroundSegmentActive: '--color-background-segment-active-vzk94k',
    colorBackgroundSegmentDefault: '--color-background-segment-default-h5aj3c',
    colorBackgroundSegmentDisabled:
      '--color-background-segment-disabled-w1oq24',
    colorBackgroundSegmentHover: '--color-background-segment-hover-9sxn8u',
    colorBackgroundSliderHandleDefault:
      '--color-background-slider-handle-default-nidjhe',
    colorBackgroundSliderHandleActive:
      '--color-background-slider-handle-active-qi7max',
    colorBackgroundSliderTrack: '--color-background-slider-track-6pt3x9',
    colorBackgroundSliderHandleRing:
      '--color-background-slider-handle-ring-nn99ak',
    colorBackgroundSliderErrorPressed:
      '--color-background-slider-error-pressed-gejffm',
    colorBackgroundSliderWarningPressed:
      '--color-background-slider-warning-pressed-5mq7vz',
    colorBackgroundStatusError: '--color-background-status-error-oemu7d',
    colorBackgroundStatusInfo: '--color-background-status-info-pgxhez',
    colorBackgroundStatusSuccess: '--color-background-status-success-6fu96x',
    colorBackgroundStatusWarning: '--color-background-status-warning-c7n5t6',
    colorBackgroundTableHeader: '--color-background-table-header-ly5ewp',
    colorBackgroundTilesDisabled: '--color-background-tiles-disabled-ctqo0t',
    colorBackgroundToggleCheckedDisabled:
      '--color-background-toggle-checked-disabled-uehqtc',
    colorBackgroundToggleDefault: '--color-background-toggle-default-q71d3m',
    colorBorderButtonNormalActive:
      '--color-border-button-normal-active-mn8z2y',
    colorBorderButtonNormalDefault:
      '--color-border-button-normal-default-bqhrgd',
    colorBorderButtonNormalDisabled:
      '--color-border-button-normal-disabled-vj6u6p',
    colorBorderButtonNormalHover: '--color-border-button-normal-hover-9bq1t6',
    colorBorderButtonPrimaryDisabled:
      '--color-border-button-primary-disabled-2pi6u1',
    colorBorderCalendarGrid: '--color-border-calendar-grid-2ab4m1',
    colorBorderCalendarGridSelectedFocusRing:
      '--color-border-calendar-grid-selected-focus-ring-hhlvy8',
    colorBorderCodeEditorAceActiveLineLightTheme:
      '--color-border-code-editor-ace-active-line-light-theme-b3qkmf',
    colorBorderCodeEditorAceActiveLineDarkTheme:
      '--color-border-code-editor-ace-active-line-dark-theme-amkoqa',
    colorBorderCodeEditorDefault: '--color-border-code-editor-default-mu8x7p',
    colorBorderCodeEditorPaneItemHover:
      '--color-border-code-editor-pane-item-hover-c2ber2',
    colorBorderContainerDivider: '--color-border-container-divider-gl15p9',
    colorBorderContainerTop: '--color-border-container-top-9shhmi',
    colorBorderControlChecked: '--color-border-control-checked-bqdl6s',
    colorBorderControlDefault: '--color-border-control-default-8uhjl0',
    colorBorderControlDisabled: '--color-border-control-disabled-4hz3mo',
    colorBorderDividerActive: '--color-border-divider-active-n0a8d4',
    colorBorderDividerDefault: '--color-border-divider-default-in8dkg',
    colorBorderDividerPanelBottom:
      '--color-border-divider-panel-bottom-sc2k0v',
    colorBorderDividerPanelSide: '--color-border-divider-panel-side-btgups',
    colorBorderDividerSecondary: '--color-border-divider-secondary-domene',
    colorBorderDropdownContainer: '--color-border-dropdown-container-8z5cx9',
    colorBorderDropdownGroup: '--color-border-dropdown-group-mkqzrv',
    colorBorderDropdownItemDefault:
      '--color-border-dropdown-item-default-xnte9u',
    colorBorderDropdownItemHover: '--color-border-dropdown-item-hover-gqjku2',
    colorBorderDropdownItemDimmedHover:
      '--color-border-dropdown-item-dimmed-hover-ydzhss',
    colorBorderDropdownItemSelected:
      '--color-border-dropdown-item-selected-fxzclw',
    colorBorderDropdownItemTop: '--color-border-dropdown-item-top-of452d',
    colorBorderEditableCellHover: '--color-border-editable-cell-hover-hx4at2',
    colorBorderInputDefault: '--color-border-input-default-aksbt5',
    colorBorderInputDisabled: '--color-border-input-disabled-v8bsvq',
    colorBorderInputFocused: '--color-border-input-focused-v6z9fd',
    colorBorderItemFocused: '--color-border-item-focused-v8nq2m',
    colorBorderDropdownItemFocused:
      '--color-border-dropdown-item-focused-3o10kx',
    colorBorderItemPlaceholder: '--color-border-item-placeholder-14j9vy',
    colorBorderItemSelected: '--color-border-item-selected-20gejb',
    colorBorderLayout: '--color-border-layout-py7xy0',
    colorBorderNotificationStackBar:
      '--color-border-notification-stack-bar-sbqbf5',
    colorBorderPanelHeader: '--color-border-panel-header-kec01h',
    colorBorderPopover: '--color-border-popover-sxojn8',
    colorBorderSegmentActive: '--color-border-segment-active-mnwdth',
    colorBorderSegmentDefault: '--color-border-segment-default-35wzaz',
    colorBorderSegmentDisabled: '--color-border-segment-disabled-5021ch',
    colorBorderSegmentHover: '--color-border-segment-hover-kgadnx',
    colorBorderStatusError: '--color-border-status-error-xj05xm',
    colorBorderStatusInfo: '--color-border-status-info-q9np44',
    colorBorderStatusSuccess: '--color-border-status-success-ce6e1e',
    colorBorderStatusWarning: '--color-border-status-warning-gda7pe',
    colorBorderDividerInteractiveDefault:
      '--color-border-divider-interactive-default-2k7xs4',
    colorBorderTabsDivider: '--color-border-tabs-divider-xzqbyc',
    colorBorderTabsShadow: '--color-border-tabs-shadow-vlaodw',
    colorBorderTabsUnderline: '--color-border-tabs-underline-vxhq31',
    colorBorderTilesDisabled: '--color-border-tiles-disabled-o1okbc',
    colorBorderTutorial: '--color-border-tutorial-sux9fj',
    colorForegroundControlDefault: '--color-foreground-control-default-8qoldl',
    colorForegroundControlDisabled:
      '--color-foreground-control-disabled-fcoqdk',
    colorShadowDefault: '--color-shadow-default-9hs6xx',
    colorShadowMedium: '--color-shadow-medium-k8nach',
    colorShadowSide: '--color-shadow-side-10t0av',
    colorStrokeChartLine: '--color-stroke-chart-line-917j1w',
    colorStrokeCodeEditorResizeHandler:
      '--color-stroke-code-editor-resize-handler-suyu7g',
    colorStrokeCodeEditorGutterActiveLineDefault:
      '--color-stroke-code-editor-gutter-active-line-default-xxibs6',
    colorStrokeCodeEditorGutterActiveLineHover:
      '--color-stroke-code-editor-gutter-active-line-hover-8u0esk',
    colorTextAccent: '--color-text-accent-yy9054',
    colorTextBodyDefault: '--color-text-body-default-ffdwgg',
    colorTextBodySecondary: '--color-text-body-secondary-6ysfsn',
    colorTextBreadcrumbCurrent: '--color-text-breadcrumb-current-pm5uhh',
    colorTextBreadcrumbIcon: '--color-text-breadcrumb-icon-egad48',
    colorTextButtonInlineIconDefault:
      '--color-text-button-inline-icon-default-870ilx',
    colorTextButtonInlineIconDisabled:
      '--color-text-button-inline-icon-disabled-m6lq35',
    colorTextButtonInlineIconHover:
      '--color-text-button-inline-icon-hover-gmrtb4',
    colorTextButtonNormalActive: '--color-text-button-normal-active-fp98iq',
    colorTextButtonNormalDefault: '--color-text-button-normal-default-gpe171',
    colorTextButtonNormalHover: '--color-text-button-normal-hover-3xe8o6',
    colorTextLinkButtonNormalDefault:
      '--color-text-link-button-normal-default-pfifu1',
    colorTextLinkButtonNormalHover:
      '--color-text-link-button-normal-hover-dhq1ri',
    colorTextLinkButtonNormalActive:
      '--color-text-link-button-normal-active-7nf3v1',
    colorTextButtonPrimaryActive: '--color-text-button-primary-active-awr7hs',
    colorTextButtonPrimaryDefault:
      '--color-text-button-primary-default-7w7yjc',
    colorTextButtonPrimaryHover: '--color-text-button-primary-hover-exy0sq',
    colorTextCalendarDateHover: '--color-text-calendar-date-hover-ti96oo',
    colorTextCalendarDateSelected:
      '--color-text-calendar-date-selected-h017hu',
    colorTextCalendarMonth: '--color-text-calendar-month-u6kvu0',
    colorTextCodeEditorGutterActiveLine:
      '--color-text-code-editor-gutter-active-line-9w975q',
    colorTextCodeEditorGutterDefault:
      '--color-text-code-editor-gutter-default-5gmexo',
    colorTextCodeEditorStatusBarDisabled:
      '--color-text-code-editor-status-bar-disabled-xv1fre',
    colorTextCodeEditorTabButtonError:
      '--color-text-code-editor-tab-button-error-xw0xdi',
    colorTextColumnHeader: '--color-text-column-header-beosjg',
    colorTextColumnSortingIcon: '--color-text-column-sorting-icon-btnn2y',
    colorTextControlDisabled: '--color-text-control-disabled-nl82op',
    colorTextCounter: '--color-text-counter-f3a2pb',
    colorTextDisabled: '--color-text-disabled-govsss',
    colorTextDisabledInlineEdit: '--color-text-disabled-inline-edit-64vc6h',
    colorTextDropdownFooter: '--color-text-dropdown-footer-rnmaph',
    colorTextDropdownGroupLabel: '--color-text-dropdown-group-label-sizd89',
    colorTextDropdownItemDefault: '--color-text-dropdown-item-default-d4af6n',
    colorTextDropdownItemDimmed: '--color-text-dropdown-item-dimmed-oru6hf',
    colorTextDropdownItemDisabled:
      '--color-text-dropdown-item-disabled-nf1b1j',
    colorTextDropdownItemFilterMatch:
      '--color-text-dropdown-item-filter-match-45q4r4',
    colorTextDropdownItemHighlighted:
      '--color-text-dropdown-item-highlighted-ek38zi',
    colorTextDropdownItemSecondary:
      '--color-text-dropdown-item-secondary-x5katv',
    colorTextDropdownItemSecondaryHover:
      '--color-text-dropdown-item-secondary-hover-q6kp0a',
    colorTextEmpty: '--color-text-empty-jskpnv',
    colorTextExpandableSectionDefault:
      '--color-text-expandable-section-default-6s8xf7',
    colorTextExpandableSectionHover:
      '--color-text-expandable-section-hover-6msis6',
    colorTextExpandableSectionNavigationIconDefault:
      '--color-text-expandable-section-navigation-icon-default-p5s2p2',
    colorTextFormDefault: '--color-text-form-default-24kkuw',
    colorTextFormLabel: '--color-text-form-label-3ubxwt',
    colorTextFormSecondary: '--color-text-form-secondary-rh78tu',
    colorTextGroupLabel: '--color-text-group-label-kysf47',
    colorTextLabelGenAi: '--color-text-label-gen-ai-7bbg8j',
    colorTextHeadingDefault: '--color-text-heading-default-tsgvby',
    colorTextHeadingSecondary: '--color-text-heading-secondary-b83go1',
    colorTextHomeHeaderDefault: '--color-text-home-header-default-e5dwf0',
    colorTextHomeHeaderSecondary: '--color-text-home-header-secondary-w19oie',
    colorTextIconCaret: '--color-text-icon-caret-gs91nh',
    colorTextIconSubtle: '--color-text-icon-subtle-cpywuu',
    colorTextInputDisabled: '--color-text-input-disabled-c1yp62',
    colorTextInputPlaceholder: '--color-text-input-placeholder-epedqe',
    colorTextInputPlaceholderDisabled:
      '--color-text-input-placeholder-disabled-ovndcz',
    colorTextInteractiveActive: '--color-text-interactive-active-jrhxoe',
    colorTextInteractiveDefault: '--color-text-interactive-default-dt26aj',
    colorTextInteractiveDisabled: '--color-text-interactive-disabled-e23z4j',
    colorTextInteractiveHover: '--color-text-interactive-hover-7who0l',
    colorTextInteractiveInvertedDefault:
      '--color-text-interactive-inverted-default-n7b0xy',
    colorTextInteractiveInvertedHover:
      '--color-text-interactive-inverted-hover-pxgg1k',
    colorTextInverted: '--color-text-inverted-g0utm2',
    colorTextLabel: '--color-text-label-62sx61',
    colorTextLayoutToggle: '--color-text-layout-toggle-bxubxk',
    colorTextLayoutToggleActive: '--color-text-layout-toggle-active-zmvv31',
    colorTextLayoutToggleHover: '--color-text-layout-toggle-hover-j81kcb',
    colorTextLayoutToggleSelected:
      '--color-text-layout-toggle-selected-55i412',
    colorTextLinkDefault: '--color-text-link-default-hop3gv',
    colorTextLinkHover: '--color-text-link-hover-8s5z9d',
    colorTextLinkInvertedHover: '--color-text-link-inverted-hover-1mweln',
    colorTextLinkButtonUnderline: '--color-text-link-button-underline-14s7oj',
    colorTextLinkButtonUnderlineHover:
      '--color-text-link-button-underline-hover-jgc99f',
    colorTextNotificationDefault: '--color-text-notification-default-hruauw',
    colorTextNotificationStackBar:
      '--color-text-notification-stack-bar-98z6hr',
    colorTextNotificationYellow: '--color-text-notification-yellow-3bwe6p',
    colorTextPaginationPageNumberActiveDisabled:
      '--color-text-pagination-page-number-active-disabled-jox4ky',
    colorTextPaginationPageNumberDefault:
      '--color-text-pagination-page-number-default-wqlfx1',
    colorTextSegmentActive: '--color-text-segment-active-btzb2u',
    colorTextSegmentDefault: '--color-text-segment-default-0avmkx',
    colorTextSegmentHover: '--color-text-segment-hover-xu8nwp',
    colorTextSmall: '--color-text-small-452yri',
    colorTextStatusError: '--color-text-status-error-ofc4yr',
    colorTextStatusInactive: '--color-text-status-inactive-kvlxhf',
    colorTextStatusInfo: '--color-text-status-info-aq7yd6',
    colorTextStatusSuccess: '--color-text-status-success-owjbj0',
    colorTextStatusWarning: '--color-text-status-warning-azn00c',
    colorTextTopNavigationTitle: '--color-text-top-navigation-title-ow31ne',
    colorBoardPlaceholderActive: '--color-board-placeholder-active-ekuw58',
    colorBoardPlaceholderHover: '--color-board-placeholder-hover-n8221j',
    colorDragPlaceholderActive: '--color-drag-placeholder-active-1io9xa',
    colorDragPlaceholderHover: '--color-drag-placeholder-hover-pc6z01',
    colorDropzoneBackgroundActive: '--color-dropzone-background-active-bfw0vt',
    colorDropzoneBackgroundHover: '--color-dropzone-background-hover-5pfqtu',
    colorDropzoneTextActive: '--color-dropzone-text-active-v8joq4',
    colorDropzoneTextHover: '--color-dropzone-text-hover-tw679e',
    fontBoxValueLargeWeight: '--font-box-value-large-weight-gpwhlq',
    fontButtonLetterSpacing: '--font-button-letter-spacing-kukfsk',
    fontButtonWeight: '--font-button-weight-s67y37',
    fontChartDetailSize: '--font-chart-detail-size-pob89f',
    fontDisplayLabelWeight: '--font-display-label-weight-2njs7q',
    fontExpandableHeadingSize: '--font-expandable-heading-size-oezd0p',
    fontFamilyBase: '--font-family-base-0nmw8v',
    fontFamilyMonospace: '--font-family-monospace-yt4nwf',
    fontHeaderH2DescriptionLineHeight:
      '--font-header-h2-description-line-height-trwmd4',
    fontHeaderH2DescriptionSize: '--font-header-h2-description-size-zfw7u2',
    fontLinkButtonLetterSpacing: '--font-link-button-letter-spacing-bphvbi',
    fontLinkButtonWeight: '--font-link-button-weight-3dz9pc',
    fontPanelHeaderLineHeight: '--font-panel-header-line-height-leujyg',
    fontPanelHeaderSize: '--font-panel-header-size-tbwmfr',
    fontSizeBodyM: '--font-size-body-m-pa3mqb',
    fontSizeBodyS: '--font-size-body-s-533prh',
    fontSizeDisplayL: '--font-size-display-l-4u0od7',
    fontSizeHeadingXl: '--font-size-heading-xl-k9a0qt',
    fontSizeHeadingL: '--font-size-heading-l-l21r86',
    fontSizeHeadingM: '--font-size-heading-m-io97me',
    fontSizeHeadingS: '--font-size-heading-s-w1c4ce',
    fontSizeHeadingXs: '--font-size-heading-xs-pz04z3',
    fontSmoothingMozOsx: '--font-smoothing-moz-osx-fw8n0n',
    fontSmoothingWebkit: '--font-smoothing-webkit-8fiijr',
    fontTabsDisabledWeight: '--font-tabs-disabled-weight-uew17o',
    fontTabsLineHeight: '--font-tabs-line-height-om7l0p',
    fontTabsSize: '--font-tabs-size-0kyoli',
    fontWayfindingLinkActiveWeight:
      '--font-wayfinding-link-active-weight-wec2dg',
    fontWeightHeadingXl: '--font-weight-heading-xl-wjmxp3',
    fontWeightHeadingL: '--font-weight-heading-l-1hf845',
    fontWeightHeadingM: '--font-weight-heading-m-6tlbfp',
    fontWeightHeadingS: '--font-weight-heading-s-mkhu7c',
    fontWeightHeadingXs: '--font-weight-heading-xs-lfmr92',
    fontWeightHeavy: '--font-weight-heavy-scmljv',
    letterSpacingBodyS: '--letter-spacing-body-s-nkvets',
    letterSpacingDisplayL: '--letter-spacing-display-l-sra9qb',
    letterSpacingHeadingXl: '--letter-spacing-heading-xl-87t96e',
    letterSpacingHeadingL: '--letter-spacing-heading-l-bejyzw',
    letterSpacingHeadingM: '--letter-spacing-heading-m-kfwhdw',
    letterSpacingHeadingS: '--letter-spacing-heading-s-badvkb',
    lineHeightBodyM: '--line-height-body-m-2zx78l',
    lineHeightBodyS: '--line-height-body-s-n0pazd',
    lineHeightDisplayL: '--line-height-display-l-zgnpxt',
    lineHeightHeadingXl: '--line-height-heading-xl-v9hsvt',
    lineHeightHeadingL: '--line-height-heading-l-vog8w7',
    lineHeightHeadingM: '--line-height-heading-m-6mmwjh',
    lineHeightHeadingS: '--line-height-heading-s-h0lds9',
    lineHeightHeadingXs: '--line-height-heading-xs-jsenn1',
    borderActiveWidth: '--border-active-width-lk35x8',
    borderCodeEditorStatusDividerWidth:
      '--border-code-editor-status-divider-width-j22nww',
    borderContainerStickyWidth: '--border-container-sticky-width-xo3q2l',
    borderContainerTopWidth: '--border-container-top-width-s1x6t0',
    borderControlFocusRingShadowSpread:
      '--border-control-focus-ring-shadow-spread-0k725q',
    borderControlInvalidFocusRingShadowSpread:
      '--border-control-invalid-focus-ring-shadow-spread-v3635w',
    borderDividerListWidth: '--border-divider-list-width-471u6a',
    borderDividerSectionWidth: '--border-divider-section-width-wl9k66',
    borderDropdownVirtualOffsetWidth:
      '--border-dropdown-virtual-offset-width-fpddos',
    borderFieldWidth: '--border-field-width-yoy972',
    borderInvalidWidth: '--border-invalid-width-hp6noi',
    borderItemWidth: '--border-item-width-0zxiwv',
    borderLineChartDashArray: '--border-line-chart-dash-array-7c084h',
    borderLineChartLineJoin: '--border-line-chart-line-join-z2nu1c',
    borderLineChartWidth: '--border-line-chart-width-qt73mb',
    borderPanelHeaderWidth: '--border-panel-header-width-xo2sbi',
    borderPanelTopWidth: '--border-panel-top-width-vktuvo',
    borderRadiusAlert: '--border-radius-alert-flb0mp',
    borderRadiusBadge: '--border-radius-badge-iqcxsr',
    borderRadiusButton: '--border-radius-button-8zlwjs',
    borderRadiusCalendarDayFocusRing:
      '--border-radius-calendar-day-focus-ring-6ckim2',
    borderRadiusCodeEditor: '--border-radius-code-editor-tir8eq',
    borderRadiusContainer: '--border-radius-container-jm6teg',
    borderRadiusControlCircularFocusRing:
      '--border-radius-control-circular-focus-ring-mxepal',
    borderRadiusControlDefaultFocusRing:
      '--border-radius-control-default-focus-ring-a78bgq',
    borderRadiusDropdown: '--border-radius-dropdown-cw0ldi',
    borderRadiusDropzone: '--border-radius-dropzone-k65k4p',
    borderRadiusFlashbar: '--border-radius-flashbar-eqkx39',
    borderRadiusItem: '--border-radius-item-jsz3j8',
    borderRadiusInput: '--border-radius-input-hy50dp',
    borderRadiusPopover: '--border-radius-popover-1pght2',
    borderRadiusTabsFocusRing: '--border-radius-tabs-focus-ring-7k0vsi',
    borderRadiusTiles: '--border-radius-tiles-cnruhs',
    borderRadiusToken: '--border-radius-token-h9xa3v',
    borderRadiusTutorialPanelItem:
      '--border-radius-tutorial-panel-item-8f1qgg',
    borderTableStickyWidth: '--border-table-sticky-width-mb7esq',
    borderLinkFocusRingOutline: '--border-link-focus-ring-outline-gygm43',
    borderLinkFocusRingShadowSpread:
      '--border-link-focus-ring-shadow-spread-efbp5h',
    motionDurationExtraFast: '--motion-duration-extra-fast-tp757t',
    motionDurationExtraSlow: '--motion-duration-extra-slow-rwzfnp',
    motionDurationFast: '--motion-duration-fast-xv2yiz',
    motionDurationModerate: '--motion-duration-moderate-cp984g',
    motionDurationRefreshOnlyAmbient:
      '--motion-duration-refresh-only-ambient-izk27v',
    motionDurationRefreshOnlyFast:
      '--motion-duration-refresh-only-fast-y7h37k',
    motionDurationRefreshOnlyMedium:
      '--motion-duration-refresh-only-medium-0rwzu1',
    motionDurationRefreshOnlySlow:
      '--motion-duration-refresh-only-slow-zaoigb',
    motionDurationRotate180: '--motion-duration-rotate-180-6z1h8e',
    motionDurationRotate90: '--motion-duration-rotate-90-f4h6jw',
    motionDurationShowPaced: '--motion-duration-show-paced-wu1v6q',
    motionDurationShowQuick: '--motion-duration-show-quick-kypzaj',
    motionDurationSlow: '--motion-duration-slow-ncmroz',
    motionDurationTransitionQuick: '--motion-duration-transition-quick-j01tkg',
    motionDurationTransitionShowPaced:
      '--motion-duration-transition-show-paced-wrsk0l',
    motionDurationTransitionShowQuick:
      '--motion-duration-transition-show-quick-dzfata',
    motionEasingEaseOutQuart: '--motion-easing-ease-out-quart-8sctun',
    motionEasingRefreshOnlyA: '--motion-easing-refresh-only-a-liv5su',
    motionEasingRefreshOnlyB: '--motion-easing-refresh-only-b-wk2p34',
    motionEasingRefreshOnlyC: '--motion-easing-refresh-only-c-2mltoq',
    motionEasingRefreshOnlyD: '--motion-easing-refresh-only-d-ziswyj',
    motionEasingRotate180: '--motion-easing-rotate-180-l3wboa',
    motionEasingRotate90: '--motion-easing-rotate-90-ncjpnu',
    motionEasingShowPaced: '--motion-easing-show-paced-72rrqw',
    motionEasingShowQuick: '--motion-easing-show-quick-lvi5i8',
    motionEasingTransitionQuick: '--motion-easing-transition-quick-9ktw66',
    motionEasingTransitionShowPaced:
      '--motion-easing-transition-show-paced-o52el4',
    motionEasingTransitionShowQuick:
      '--motion-easing-transition-show-quick-b86lf8',
    motionEasingResponsive: '--motion-easing-responsive-80ki08',
    motionEasingSticky: '--motion-easing-sticky-xk36yb',
    motionEasingExpressive: '--motion-easing-expressive-rf6lml',
    motionDurationResponsive: '--motion-duration-responsive-7lway4',
    motionDurationExpressive: '--motion-duration-expressive-y70ijj',
    motionDurationComplex: '--motion-duration-complex-wqst0e',
    motionKeyframesFadeIn: '--motion-keyframes-fade-in-9c1z3f',
    motionKeyframesFadeOut: '--motion-keyframes-fade-out-xt2tfz',
    motionKeyframesStatusIconError:
      '--motion-keyframes-status-icon-error-857oi6',
    motionKeyframesScalePopup: '--motion-keyframes-scale-popup-srwmvy',
    sizeCalendarGridWidth: '--size-calendar-grid-width-m7rthz',
    sizeControl: '--size-control-73ulj5',
    sizeIconBig: '--size-icon-big-hyxarq',
    sizeIconLarge: '--size-icon-large-1jcidp',
    sizeIconMedium: '--size-icon-medium-6sroof',
    sizeIconNormal: '--size-icon-normal-wflv4k',
    sizeTableSelectionHorizontal: '--size-table-selection-horizontal-8ncv96',
    sizeVerticalInput: '--size-vertical-input-ubbp77',
    sizeVerticalPanelIconOffset: '--size-vertical-panel-icon-offset-04nxf8',
    spaceAlertActionLeft: '--space-alert-action-left-5t7fct',
    spaceAlertHorizontal: '--space-alert-horizontal-bwh51v',
    spaceAlertMessageRight: '--space-alert-message-right-px48tx',
    spaceAlertVertical: '--space-alert-vertical-f4n3qs',
    spaceButtonFocusOutlineGutter:
      '--space-button-focus-outline-gutter-s68ny8',
    spaceButtonHorizontal: '--space-button-horizontal-lcftji',
    spaceButtonIconFocusOutlineGutterVertical:
      '--space-button-icon-focus-outline-gutter-vertical-e6tfh3',
    spaceButtonIconOnlyHorizontal:
      '--space-button-icon-only-horizontal-xuxfmj',
    spaceButtonInlineIconFocusOutlineGutter:
      '--space-button-inline-icon-focus-outline-gutter-td260a',
    spaceButtonModalDismissVertical:
      '--space-button-modal-dismiss-vertical-j2m0cp',
    spaceCalendarGridFocusOutlineGutter:
      '--space-calendar-grid-focus-outline-gutter-pkb6ov',
    spaceCalendarGridSelectedFocusOutlineGutter:
      '--space-calendar-grid-selected-focus-outline-gutter-3hk571',
    spaceCalendarGridGutter: '--space-calendar-grid-gutter-tohz1e',
    spaceCardHorizontal: '--space-card-horizontal-mtfoa8',
    spaceCardVertical: '--space-card-vertical-lhexxi',
    spaceCodeEditorStatusFocusOutlineGutter:
      '--space-code-editor-status-focus-outline-gutter-frwh89',
    spaceContainerContentTop: '--space-container-content-top-dkluz9',
    spaceContainerHeaderTop: '--space-container-header-top-bomjbu',
    spaceContainerHeaderBottom: '--space-container-header-bottom-qqnwwz',
    spaceContainerHorizontal: '--space-container-horizontal-oebwqe',
    spaceContentHeaderPaddingBottom:
      '--space-content-header-padding-bottom-d3iv03',
    spaceDarkHeaderOverlapDistance:
      '--space-dark-header-overlap-distance-f6oo6u',
    spaceExpandableSectionIconOffsetTop:
      '--space-expandable-section-icon-offset-top-5sppg0',
    spaceFieldHorizontal: '--space-field-horizontal-cy5q05',
    spaceFieldIconOffset: '--space-field-icon-offset-llp3ak',
    spaceFilteringTokenDismissButtonFocusOutlineGutter:
      '--space-filtering-token-dismiss-button-focus-outline-gutter-wguy2m',
    spaceFilteringTokenOperationSelectFocusOutlineGutter:
      '--space-filtering-token-operation-select-focus-outline-gutter-lr5vk6',
    spaceFlashbarActionLeft: '--space-flashbar-action-left-ssm29i',
    spaceFlashbarDismissRight: '--space-flashbar-dismiss-right-rydxjj',
    spaceFlashbarHorizontal: '--space-flashbar-horizontal-ds0ef3',
    spaceGridGutter: '--space-grid-gutter-fzqbbi',
    spaceKeyValueGap: '--space-key-value-gap-5wd2dd',
    spaceLayoutContentBottom: '--space-layout-content-bottom-ve4osc',
    spaceLayoutContentHorizontal: '--space-layout-content-horizontal-sin989',
    spaceLayoutToggleDiameter: '--space-layout-toggle-diameter-ugv12v',
    spaceLayoutTogglePadding: '--space-layout-toggle-padding-k1jpy8',
    spaceModalContentBottom: '--space-modal-content-bottom-jqf2xu',
    spaceModalHorizontal: '--space-modal-horizontal-rppbjb',
    spaceOptionIconBigTop: '--space-option-icon-big-top-b7er3p',
    spacePanelContentBottom: '--space-panel-content-bottom-a67jcq',
    spacePanelContentTop: '--space-panel-content-top-adxo81',
    spacePanelDividerMarginHorizontal:
      '--space-panel-divider-margin-horizontal-2jmfkj',
    spacePanelHeaderVertical: '--space-panel-header-vertical-3c8qmg',
    spacePanelNavLeft: '--space-panel-nav-left-c5t4hj',
    spacePanelSideLeft: '--space-panel-side-left-wmxosk',
    spacePanelSideRight: '--space-panel-side-right-23w8pv',
    spacePanelSplitTop: '--space-panel-split-top-517tlt',
    spacePanelSplitBottom: '--space-panel-split-bottom-hlzmwi',
    spaceSegmentedControlFocusOutlineGutter:
      '--space-segmented-control-focus-outline-gutter-eptt97',
    spaceTabsContentTop: '--space-tabs-content-top-53djlo',
    spaceTabsFocusOutlineGutter: '--space-tabs-focus-outline-gutter-2tu8wb',
    spaceTableContentBottom: '--space-table-content-bottom-r9l1c2',
    spaceTableEmbeddedHeaderTop: '--space-table-embedded-header-top-u7x1ax',
    spaceTableFooterHorizontal: '--space-table-footer-horizontal-t5rbr4',
    spaceTableHeaderFocusOutlineGutter:
      '--space-table-header-focus-outline-gutter-czfdw1',
    spaceTableHeaderHorizontal: '--space-table-header-horizontal-vhrx2d',
    spaceTableHeaderToolsBottom: '--space-table-header-tools-bottom-8i4ihz',
    spaceTableHeaderToolsFullPageBottom:
      '--space-table-header-tools-full-page-bottom-dmyrgq',
    spaceTableHorizontal: '--space-table-horizontal-ciak0s',
    spaceScaled2xNone: '--space-scaled-2x-none-8figwi',
    spaceScaled2xXxxs: '--space-scaled-2x-xxxs-fni7un',
    spaceScaled2xXxs: '--space-scaled-2x-xxs-r5f1ts',
    spaceScaled2xXs: '--space-scaled-2x-xs-i509zh',
    spaceScaled2xS: '--space-scaled-2x-s-ho1wep',
    spaceScaled2xM: '--space-scaled-2x-m-9606n2',
    spaceScaled2xL: '--space-scaled-2x-l-z6majk',
    spaceScaled2xXl: '--space-scaled-2x-xl-20qbzu',
    spaceScaled2xXxl: '--space-scaled-2x-xxl-ctb50u',
    spaceScaled2xXxxl: '--space-scaled-2x-xxxl-tfmfie',
    spaceScaledNone: '--space-scaled-none-ch5fay',
    spaceScaledXxxs: '--space-scaled-xxxs-f7yq15',
    spaceScaledXxs: '--space-scaled-xxs-t7ij38',
    spaceScaledXs: '--space-scaled-xs-x91h81',
    spaceScaledS: '--space-scaled-s-9q8n2q',
    spaceScaledM: '--space-scaled-m-er48cl',
    spaceScaledL: '--space-scaled-l-08jb88',
    spaceScaledXl: '--space-scaled-xl-rljqft',
    spaceScaledXxl: '--space-scaled-xxl-x330me',
    spaceScaledXxxl: '--space-scaled-xxxl-679zhd',
    spaceStaticXxxs: '--space-static-xxxs-xl6joh',
    spaceStaticXxs: '--space-static-xxs-z6w5bq',
    spaceStaticXs: '--space-static-xs-fdj8ix',
    spaceStaticS: '--space-static-s-8wszr2',
    spaceStaticM: '--space-static-m-qndr1s',
    spaceStaticL: '--space-static-l-pis4tp',
    spaceStaticXl: '--space-static-xl-7mq0rg',
    spaceStaticXxl: '--space-static-xxl-7z2fd2',
    spaceStaticXxxl: '--space-static-xxxl-paxl2q',
    spaceNone: '--space-none-lkz84w',
    spaceXxxs: '--space-xxxs-z28114',
    spaceXxs: '--space-xxs-9rrxti',
    spaceXs: '--space-xs-xf5ch3',
    spaceS: '--space-s-2025hl',
    spaceM: '--space-m-kpg8id',
    spaceL: '--space-l-xu1x80',
    spaceXl: '--space-xl-5fdwzu',
    spaceXxl: '--space-xxl-pd3205',
    spaceXxxl: '--space-xxxl-gvq98t',
    shadowContainer: '--shadow-container-5104ec',
    shadowContainerStacked: '--shadow-container-stacked-g0apbk',
    shadowContainerActive: '--shadow-container-active-2up8or',
    shadowDropdown: '--shadow-dropdown-xrjjuu',
    shadowDropup: '--shadow-dropup-ovsp4h',
    shadowFlashCollapsed: '--shadow-flash-collapsed-pxdair',
    shadowFlashSticky: '--shadow-flash-sticky-p1i2ji',
    shadowModal: '--shadow-modal-1f40b3',
    shadowPanel: '--shadow-panel-eyw753',
    shadowPanelToggle: '--shadow-panel-toggle-s7z0bo',
    shadowPopover: '--shadow-popover-ona09r',
    shadowSplitBottom: '--shadow-split-bottom-nfmseg',
    shadowSplitSide: '--shadow-split-side-q8jr2v',
    shadowSticky: '--shadow-sticky-hxu2pv',
    shadowStickyEmbedded: '--shadow-sticky-embedded-f9wivk',
    shadowStickyColumnFirst: '--shadow-sticky-column-first-kcqiid',
    shadowStickyColumnLast: '--shadow-sticky-column-last-pn4nzt'
  }
}
