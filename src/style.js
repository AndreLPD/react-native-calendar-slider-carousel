import { Platform, StyleSheet } from 'react-native';

const createStyles = (daySize, monthBackgroundColor, monthBackgroundColorDisabled, calendarBackgroundColor, borderRadius ) =>
{
StyleSheet.create({
  singleContainer: {
    height: daySize,
    width: daySize,
    padding: 10,
    shadowOpacity: Platform.OS === 'web' ? 0 : 0.18,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 6,
  },
  singleDateBox: {
    borderRadius: borderRadius,
    overflow: 'hidden',
    backgroundColor: calendarBackgroundColor,
    height: 100,
    width: 100,
    flexDirection: 'column',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 6,
    zIndex: 3,
  },
  singleContainerSelected: {
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 6,
  },
  closed: {
    color: monthBackgroundColorDisabled,
  },
  monthContainerClosed: {
    backgroundColor: monthBackgroundColorDisabled,
  },
  monthContainer: {
    height: 25,
    backgroundColor: monthBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#fff',
  },
  dateContainer: {
    height: 50,
  },
  dateText: {
    marginTop: Platform.OS === 'ios' ? 4 : 0,
    fontSize: 38,
    textAlign: 'center',
  },
  dayContainer: {
    height: 25,
  },
  dayText: {
    fontSize: Platform.OS === 'ios' ? 16 : 15,
    textAlign: 'center',
    color: '#000',
  },
  arrow: {
    height: daySize,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
}
export default createStyles;
