import React, {PropTypes} from 'react';
import withStyles from 'universal/styles/withStyles';
import {css} from 'aphrodite-local-styles/no-important';
import appTheme from 'universal/styles/theme/appTheme';
import Avatar from 'universal/components/Avatar/Avatar';
import checkInCardBaseStyles from './checkInCardBaseStyles';
import CheckInCardButtons from 'universal/modules/meeting/components/CheckInCardButtons/CheckInCardButtons';
import {withRouter} from 'react-router';

const CheckInCard = (props) => {
  const {
    checkInPressFactory,
    handleCardClick,
    isActive,
    member,
    styles
  } = props;
  const {
    isCheckedIn,
    preferredName
  } = member;
  const cardStyles = css(
    styles.card,
    isActive ? styles.cardIsActive : styles.cardIsBlurred
  );
  return (
    <div className={cardStyles} onClick={!isActive && handleCardClick}>
      <Avatar {...member} size="largest"/>
      <div className={css(styles.cardName)}>{preferredName}</div>
      {isActive && <CheckInCardButtons checkInPressFactory={checkInPressFactory} isCheckedIn={isCheckedIn}/>}
    </div>
  );
};

CheckInCard.propTypes = {
  checkInPressFactory: PropTypes.func,
  handleCardClick: PropTypes.func,
  isActive: PropTypes.bool,
  member: PropTypes.object,
  styles: PropTypes.object
};

const styleThunk = () => ({
  card: {
    ...checkInCardBaseStyles,
    borderColor: appTheme.palette.mid50l
  },

  cardIsActive: {
    boxShadow: '0 2px 1px 1px rgba(0, 0, 0, .15)'
  },

  cardIsBlurred: {
    filter: 'blur(1.5px)',
    opacity: '.65',
    position: 'relative',
    transform: 'scale(.75)'
  },

  cardName: {
    color: appTheme.palette.dark,
    fontSize: appTheme.typography.s6,
    fontWeight: 400,
    margin: '1rem 0 2rem'
  }
});

export default withRouter(withStyles(styleThunk)(CheckInCard));
