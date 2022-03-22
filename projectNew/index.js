import React from "react"
import { ReplyIcon, MessegeIcon } from "../../vv_new_front/src/components/Icons"
import classes from "./style.module.scss"
import PropTypes from "prop-types"
import { ButtonArrow } from "@/components/Buttons"
import { eModals } from "@/Modal/ModalController/enums"
import { useModal } from "../vv_new_front/src/hooks"
import { getEndWordTypes } from "@/utils/number/getEndWord"
import { num } from "../vv_new_front/src/utils"
import join from "@/utils/join"

const AnswersButton = ({
  children,
  className,
  isPrivileged,
  callback,
  isModal,
  data,
  id,
  onSuccess,
  companyId,
  productId,
  isProduct,
  companyUrl,
  setShowAnswer = () => {},
  showAnswer = false,
}) => {
  const modal = useModal()

  const answer =
    children !== 0
      ? num.getEndWord(children, { type: getEndWordTypes.answer })
      : "Нет ответов"

  const answerPrivileged = () => {
    if (isPrivileged && callback) return setShowAnswer(!showAnswer)
    else
      return modal.open(eModals.replyToComplaint, {
        data: data,
        id: id,
        onSuccess: onSuccess,
      })
  }
  const answersUserShow = () => {
    if (children && isModal)
      return modal.open(eModals.feedbackModal, {
        data: data,
        companyId: companyId,
        productId: productId,
        id: id,
        isProduct: isProduct,
        companyUrl: companyUrl,
        openAnswer: true,
      })
    if (children) return setShowAnswer(!showAnswer)
    else return null
  }
  return (
    <>
      {isPrivileged ? (
        <div className={classes.row}>
          <button
 className={join([className, classes.AnswersButton])}           
            onClick={answerPrivileged}
            
          >
            <ReplyIcon size="16" className={classes.ReplyIcon} />
            <p>Ответить</p>
          </button>
          <button
 className={join([className, classes.AnswersButton])}           
            onClick={answersUserShow}
            
          >
            <MessegeIcon size="16" />
            <p>{answer}</p>
            {children >= 1 && (
              <ButtonArrow
                className={classes.arrow}
                direction={showAnswer ? "up" : "down"}
                color="blue"
                type="dropDown"
              />
            )}
          </button>
        </div>
      ) : (
        <div className={classes.row}>
          <button
 className={join([className, classes.AnswersButton])}           
            onClick={() => setShowAnswer(!showAnswer)}
            
          >
            <MessegeIcon size="16" />
            <p>{answer}</p>
            {children >= 1 && (
              <ButtonArrow
                className={classes.arrow}
                direction={showAnswer ? "up" : "down"}
                color="blue"
                type="dropDown"
              />
            )}
          </button>
        </div>
      )}
    </>
  )
}

AnswersButton.propTypes = {
  children: PropTypes.number,
  className: PropTypes.string,
  isPrivileged: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  callback: PropTypes.func,
  showAnswer: PropTypes.bool,
  isModal: PropTypes.bool,
  data: PropTypes.object,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onSuccess: PropTypes.func,
  companyId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  productId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  isProduct: PropTypes.bool,
  companyUrl: PropTypes.string,
  setShowAnswer: PropTypes.func,
}

export default AnswersButton
