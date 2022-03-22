import React from "react"
import { ReplyIcon, MessegeIcon } from "../../vv_new_front/src/components/Icons"
import "../../vv_new_front/src/components/Buttons/AnswersButton/style.scss"
import PropTypes from "prop-types"
import { ButtonArrow } from "@/components/Buttons"
import { eModals } from "@/Modal/ModalController/enums"
import { useModal } from "../vv_new_front/src/hooks"
import { getEndWordTypes } from "@/utils/number/getEndWord"
import { num } from "../vv_new_front/src/utils"

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
        <div styleName="row">
          <button
            styleName="AnswersButton"
            onClick={answerPrivileged}
            className={className}
          >
            <ReplyIcon size="16" styleName="ReplyIcon" />
            <p>Ответить</p>
          </button>
          <button
            styleName="AnswersButton"
            onClick={answersUserShow}
            className={className}
          >
            <MessegeIcon size="16" />
            <p>{answer}</p>
            {children >= 1 && (
              <ButtonArrow
                styleName="arrow"
                direction={showAnswer ? "up" : "down"}
                color="blue"
                type="dropDown"
              />
            )}
          </button>
        </div>
      ) : (
        <div styleName="row">
          <button
            styleName="AnswersButton"
            onClick={() => setShowAnswer(!showAnswer)}
            className={className}
          >
            <MessegeIcon size="16" />
            <p>{answer}</p>
            {children >= 1 && (
              <ButtonArrow
                styleName="arrow"
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
