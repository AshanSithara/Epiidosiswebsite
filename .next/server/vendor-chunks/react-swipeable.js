"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-swipeable";
exports.ids = ["vendor-chunks/react-swipeable"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-swipeable/es/index.js":
/*!**************************************************!*\
  !*** ./node_modules/react-swipeable/es/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DOWN: () => (/* binding */ DOWN),\n/* harmony export */   LEFT: () => (/* binding */ LEFT),\n/* harmony export */   RIGHT: () => (/* binding */ RIGHT),\n/* harmony export */   UP: () => (/* binding */ UP),\n/* harmony export */   useSwipeable: () => (/* binding */ useSwipeable)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst LEFT = \"Left\";\nconst RIGHT = \"Right\";\nconst UP = \"Up\";\nconst DOWN = \"Down\";\n\n/* global document */\nconst defaultProps = {\n    delta: 10,\n    preventScrollOnSwipe: false,\n    rotationAngle: 0,\n    trackMouse: false,\n    trackTouch: true,\n    swipeDuration: Infinity,\n    touchEventOptions: { passive: true },\n};\nconst initialState = {\n    first: true,\n    initial: [0, 0],\n    start: 0,\n    swiping: false,\n    xy: [0, 0],\n};\nconst mouseMove = \"mousemove\";\nconst mouseUp = \"mouseup\";\nconst touchEnd = \"touchend\";\nconst touchMove = \"touchmove\";\nconst touchStart = \"touchstart\";\nfunction getDirection(absX, absY, deltaX, deltaY) {\n    if (absX > absY) {\n        if (deltaX > 0) {\n            return RIGHT;\n        }\n        return LEFT;\n    }\n    else if (deltaY > 0) {\n        return DOWN;\n    }\n    return UP;\n}\nfunction rotateXYByAngle(pos, angle) {\n    if (angle === 0)\n        return pos;\n    const angleInRadians = (Math.PI / 180) * angle;\n    const x = pos[0] * Math.cos(angleInRadians) + pos[1] * Math.sin(angleInRadians);\n    const y = pos[1] * Math.cos(angleInRadians) - pos[0] * Math.sin(angleInRadians);\n    return [x, y];\n}\nfunction getHandlers(set, handlerProps) {\n    const onStart = (event) => {\n        const isTouch = \"touches\" in event;\n        // if more than a single touch don't track, for now...\n        if (isTouch && event.touches.length > 1)\n            return;\n        set((state, props) => {\n            // setup mouse listeners on document to track swipe since swipe can leave container\n            if (props.trackMouse && !isTouch) {\n                document.addEventListener(mouseMove, onMove);\n                document.addEventListener(mouseUp, onUp);\n            }\n            const { clientX, clientY } = isTouch ? event.touches[0] : event;\n            const xy = rotateXYByAngle([clientX, clientY], props.rotationAngle);\n            props.onTouchStartOrOnMouseDown &&\n                props.onTouchStartOrOnMouseDown({ event });\n            return Object.assign(Object.assign(Object.assign({}, state), initialState), { initial: xy.slice(), xy, start: event.timeStamp || 0 });\n        });\n    };\n    const onMove = (event) => {\n        set((state, props) => {\n            const isTouch = \"touches\" in event;\n            // Discount a swipe if additional touches are present after\n            // a swipe has started.\n            if (isTouch && event.touches.length > 1) {\n                return state;\n            }\n            // if swipe has exceeded duration stop tracking\n            if (event.timeStamp - state.start > props.swipeDuration) {\n                return state.swiping ? Object.assign(Object.assign({}, state), { swiping: false }) : state;\n            }\n            const { clientX, clientY } = isTouch ? event.touches[0] : event;\n            const [x, y] = rotateXYByAngle([clientX, clientY], props.rotationAngle);\n            const deltaX = x - state.xy[0];\n            const deltaY = y - state.xy[1];\n            const absX = Math.abs(deltaX);\n            const absY = Math.abs(deltaY);\n            const time = (event.timeStamp || 0) - state.start;\n            const velocity = Math.sqrt(absX * absX + absY * absY) / (time || 1);\n            const vxvy = [deltaX / (time || 1), deltaY / (time || 1)];\n            const dir = getDirection(absX, absY, deltaX, deltaY);\n            // if swipe is under delta and we have not started to track a swipe: skip update\n            const delta = typeof props.delta === \"number\"\n                ? props.delta\n                : props.delta[dir.toLowerCase()] ||\n                    defaultProps.delta;\n            if (absX < delta && absY < delta && !state.swiping)\n                return state;\n            const eventData = {\n                absX,\n                absY,\n                deltaX,\n                deltaY,\n                dir,\n                event,\n                first: state.first,\n                initial: state.initial,\n                velocity,\n                vxvy,\n            };\n            // call onSwipeStart if present and is first swipe event\n            eventData.first && props.onSwipeStart && props.onSwipeStart(eventData);\n            // call onSwiping if present\n            props.onSwiping && props.onSwiping(eventData);\n            // track if a swipe is cancelable (handler for swiping or swiped(dir) exists)\n            // so we can call preventDefault if needed\n            let cancelablePageSwipe = false;\n            if (props.onSwiping ||\n                props.onSwiped ||\n                props[`onSwiped${dir}`]) {\n                cancelablePageSwipe = true;\n            }\n            if (cancelablePageSwipe &&\n                props.preventScrollOnSwipe &&\n                props.trackTouch &&\n                event.cancelable) {\n                event.preventDefault();\n            }\n            return Object.assign(Object.assign({}, state), { \n                // first is now always false\n                first: false, eventData, swiping: true });\n        });\n    };\n    const onEnd = (event) => {\n        set((state, props) => {\n            let eventData;\n            if (state.swiping && state.eventData) {\n                // if swipe is less than duration fire swiped callbacks\n                if (event.timeStamp - state.start < props.swipeDuration) {\n                    eventData = Object.assign(Object.assign({}, state.eventData), { event });\n                    props.onSwiped && props.onSwiped(eventData);\n                    const onSwipedDir = props[`onSwiped${eventData.dir}`];\n                    onSwipedDir && onSwipedDir(eventData);\n                }\n            }\n            else {\n                props.onTap && props.onTap({ event });\n            }\n            props.onTouchEndOrOnMouseUp && props.onTouchEndOrOnMouseUp({ event });\n            return Object.assign(Object.assign(Object.assign({}, state), initialState), { eventData });\n        });\n    };\n    const cleanUpMouse = () => {\n        // safe to just call removeEventListener\n        document.removeEventListener(mouseMove, onMove);\n        document.removeEventListener(mouseUp, onUp);\n    };\n    const onUp = (e) => {\n        cleanUpMouse();\n        onEnd(e);\n    };\n    /**\n     * The value of passive on touchMove depends on `preventScrollOnSwipe`:\n     * - true => { passive: false }\n     * - false => { passive: true } // Default\n     *\n     * NOTE: When preventScrollOnSwipe is true, we attempt to call preventDefault to prevent scroll.\n     *\n     * props.touchEventOptions can also be set for all touch event listeners,\n     * but for `touchmove` specifically when `preventScrollOnSwipe` it will\n     * supersede and force passive to false.\n     *\n     */\n    const attachTouch = (el, props) => {\n        let cleanup = () => { };\n        if (el && el.addEventListener) {\n            const baseOptions = Object.assign(Object.assign({}, defaultProps.touchEventOptions), props.touchEventOptions);\n            // attach touch event listeners and handlers\n            const tls = [\n                [touchStart, onStart, baseOptions],\n                // preventScrollOnSwipe option supersedes touchEventOptions.passive\n                [\n                    touchMove,\n                    onMove,\n                    Object.assign(Object.assign({}, baseOptions), (props.preventScrollOnSwipe ? { passive: false } : {})),\n                ],\n                [touchEnd, onEnd, baseOptions],\n            ];\n            tls.forEach(([e, h, o]) => el.addEventListener(e, h, o));\n            // return properly scoped cleanup method for removing listeners, options not required\n            cleanup = () => tls.forEach(([e, h]) => el.removeEventListener(e, h));\n        }\n        return cleanup;\n    };\n    const onRef = (el) => {\n        // \"inline\" ref functions are called twice on render, once with null then again with DOM element\n        // ignore null here\n        if (el === null)\n            return;\n        set((state, props) => {\n            // if the same DOM el as previous just return state\n            if (state.el === el)\n                return state;\n            const addState = {};\n            // if new DOM el clean up old DOM and reset cleanUpTouch\n            if (state.el && state.el !== el && state.cleanUpTouch) {\n                state.cleanUpTouch();\n                addState.cleanUpTouch = void 0;\n            }\n            // only attach if we want to track touch\n            if (props.trackTouch && el) {\n                addState.cleanUpTouch = attachTouch(el, props);\n            }\n            // store event attached DOM el for comparison, clean up, and re-attachment\n            return Object.assign(Object.assign(Object.assign({}, state), { el }), addState);\n        });\n    };\n    // set ref callback to attach touch event listeners\n    const output = {\n        ref: onRef,\n    };\n    // if track mouse attach mouse down listener\n    if (handlerProps.trackMouse) {\n        output.onMouseDown = onStart;\n    }\n    return [output, attachTouch];\n}\nfunction updateTransientState(state, props, previousProps, attachTouch) {\n    // if trackTouch is off or there is no el, then remove handlers if necessary and exit\n    if (!props.trackTouch || !state.el) {\n        if (state.cleanUpTouch) {\n            state.cleanUpTouch();\n        }\n        return Object.assign(Object.assign({}, state), { cleanUpTouch: undefined });\n    }\n    // trackTouch is on, so if there are no handlers attached, attach them and exit\n    if (!state.cleanUpTouch) {\n        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });\n    }\n    // trackTouch is on and handlers are already attached, so if preventScrollOnSwipe changes value,\n    // remove and reattach handlers (this is required to update the passive option when attaching\n    // the handlers)\n    if (props.preventScrollOnSwipe !== previousProps.preventScrollOnSwipe ||\n        props.touchEventOptions.passive !== previousProps.touchEventOptions.passive) {\n        state.cleanUpTouch();\n        return Object.assign(Object.assign({}, state), { cleanUpTouch: attachTouch(state.el, props) });\n    }\n    return state;\n}\nfunction useSwipeable(options) {\n    const { trackMouse } = options;\n    const transientState = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Object.assign({}, initialState));\n    const transientProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Object.assign({}, defaultProps));\n    // track previous rendered props\n    const previousProps = react__WEBPACK_IMPORTED_MODULE_0__.useRef(Object.assign({}, transientProps.current));\n    previousProps.current = Object.assign({}, transientProps.current);\n    // update current render props & defaults\n    transientProps.current = Object.assign(Object.assign({}, defaultProps), options);\n    // Force defaults for config properties\n    let defaultKey;\n    for (defaultKey in defaultProps) {\n        if (transientProps.current[defaultKey] === void 0) {\n            transientProps.current[defaultKey] = defaultProps[defaultKey];\n        }\n    }\n    const [handlers, attachTouch] = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => getHandlers((stateSetter) => (transientState.current = stateSetter(transientState.current, transientProps.current)), { trackMouse }), [trackMouse]);\n    transientState.current = updateTransientState(transientState.current, transientProps.current, previousProps.current, attachTouch);\n    return handlers;\n}\n\n\n//# sourceMappingURL=index.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3Qtc3dpcGVhYmxlL2VzL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7O0FBRS9CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsZUFBZTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsbUJBQW1CO0FBQ3ZDO0FBQ0E7QUFDQSxrREFBa0QsT0FBTztBQUN6RCwrREFBK0QsMkJBQTJCLHNEQUFzRDtBQUNoSixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFFQUFxRSxZQUFZLGdCQUFnQjtBQUNqRztBQUNBLG9CQUFvQixtQkFBbUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsSUFBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlEO0FBQ2pEO0FBQ0Esd0RBQXdEO0FBQ3hELFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxzQkFBc0IsT0FBTztBQUMzRjtBQUNBLHlEQUF5RCxjQUFjO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLE9BQU87QUFDcEQ7QUFDQSx5RUFBeUUsT0FBTztBQUNoRiwrREFBK0QsMkJBQTJCLFdBQVc7QUFDckcsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQ7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsZ0RBQWdELGlCQUFpQixJQUFJO0FBQ3ZIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsWUFBWSxJQUFJO0FBQy9FLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVkseUJBQXlCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxZQUFZLDRDQUE0QztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxZQUFZLDRDQUE0QztBQUNyRztBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksYUFBYTtBQUN6QiwyQkFBMkIseUNBQVksaUJBQWlCO0FBQ3hELDJCQUEyQix5Q0FBWSxpQkFBaUI7QUFDeEQ7QUFDQSwwQkFBMEIseUNBQVksaUJBQWlCO0FBQ3ZELDRDQUE0QztBQUM1QztBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQywwQ0FBYSw4SEFBOEgsWUFBWTtBQUMzTDtBQUNBO0FBQ0E7O0FBRStDO0FBQy9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdC8uL25vZGVfbW9kdWxlcy9yZWFjdC1zd2lwZWFibGUvZXMvaW5kZXguanM/ODg1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IExFRlQgPSBcIkxlZnRcIjtcbmNvbnN0IFJJR0hUID0gXCJSaWdodFwiO1xuY29uc3QgVVAgPSBcIlVwXCI7XG5jb25zdCBET1dOID0gXCJEb3duXCI7XG5cbi8qIGdsb2JhbCBkb2N1bWVudCAqL1xuY29uc3QgZGVmYXVsdFByb3BzID0ge1xuICAgIGRlbHRhOiAxMCxcbiAgICBwcmV2ZW50U2Nyb2xsT25Td2lwZTogZmFsc2UsXG4gICAgcm90YXRpb25BbmdsZTogMCxcbiAgICB0cmFja01vdXNlOiBmYWxzZSxcbiAgICB0cmFja1RvdWNoOiB0cnVlLFxuICAgIHN3aXBlRHVyYXRpb246IEluZmluaXR5LFxuICAgIHRvdWNoRXZlbnRPcHRpb25zOiB7IHBhc3NpdmU6IHRydWUgfSxcbn07XG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgZmlyc3Q6IHRydWUsXG4gICAgaW5pdGlhbDogWzAsIDBdLFxuICAgIHN0YXJ0OiAwLFxuICAgIHN3aXBpbmc6IGZhbHNlLFxuICAgIHh5OiBbMCwgMF0sXG59O1xuY29uc3QgbW91c2VNb3ZlID0gXCJtb3VzZW1vdmVcIjtcbmNvbnN0IG1vdXNlVXAgPSBcIm1vdXNldXBcIjtcbmNvbnN0IHRvdWNoRW5kID0gXCJ0b3VjaGVuZFwiO1xuY29uc3QgdG91Y2hNb3ZlID0gXCJ0b3VjaG1vdmVcIjtcbmNvbnN0IHRvdWNoU3RhcnQgPSBcInRvdWNoc3RhcnRcIjtcbmZ1bmN0aW9uIGdldERpcmVjdGlvbihhYnNYLCBhYnNZLCBkZWx0YVgsIGRlbHRhWSkge1xuICAgIGlmIChhYnNYID4gYWJzWSkge1xuICAgICAgICBpZiAoZGVsdGFYID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIFJJR0hUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBMRUZUO1xuICAgIH1cbiAgICBlbHNlIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICAgIHJldHVybiBET1dOO1xuICAgIH1cbiAgICByZXR1cm4gVVA7XG59XG5mdW5jdGlvbiByb3RhdGVYWUJ5QW5nbGUocG9zLCBhbmdsZSkge1xuICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgcmV0dXJuIHBvcztcbiAgICBjb25zdCBhbmdsZUluUmFkaWFucyA9IChNYXRoLlBJIC8gMTgwKSAqIGFuZ2xlO1xuICAgIGNvbnN0IHggPSBwb3NbMF0gKiBNYXRoLmNvcyhhbmdsZUluUmFkaWFucykgKyBwb3NbMV0gKiBNYXRoLnNpbihhbmdsZUluUmFkaWFucyk7XG4gICAgY29uc3QgeSA9IHBvc1sxXSAqIE1hdGguY29zKGFuZ2xlSW5SYWRpYW5zKSAtIHBvc1swXSAqIE1hdGguc2luKGFuZ2xlSW5SYWRpYW5zKTtcbiAgICByZXR1cm4gW3gsIHldO1xufVxuZnVuY3Rpb24gZ2V0SGFuZGxlcnMoc2V0LCBoYW5kbGVyUHJvcHMpIHtcbiAgICBjb25zdCBvblN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzVG91Y2ggPSBcInRvdWNoZXNcIiBpbiBldmVudDtcbiAgICAgICAgLy8gaWYgbW9yZSB0aGFuIGEgc2luZ2xlIHRvdWNoIGRvbid0IHRyYWNrLCBmb3Igbm93Li4uXG4gICAgICAgIGlmIChpc1RvdWNoICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgc2V0KChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgICAgICAgICAgIC8vIHNldHVwIG1vdXNlIGxpc3RlbmVycyBvbiBkb2N1bWVudCB0byB0cmFjayBzd2lwZSBzaW5jZSBzd2lwZSBjYW4gbGVhdmUgY29udGFpbmVyXG4gICAgICAgICAgICBpZiAocHJvcHMudHJhY2tNb3VzZSAmJiAhaXNUb3VjaCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VNb3ZlLCBvbk1vdmUpO1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIobW91c2VVcCwgb25VcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB7IGNsaWVudFgsIGNsaWVudFkgfSA9IGlzVG91Y2ggPyBldmVudC50b3VjaGVzWzBdIDogZXZlbnQ7XG4gICAgICAgICAgICBjb25zdCB4eSA9IHJvdGF0ZVhZQnlBbmdsZShbY2xpZW50WCwgY2xpZW50WV0sIHByb3BzLnJvdGF0aW9uQW5nbGUpO1xuICAgICAgICAgICAgcHJvcHMub25Ub3VjaFN0YXJ0T3JPbk1vdXNlRG93biAmJlxuICAgICAgICAgICAgICAgIHByb3BzLm9uVG91Y2hTdGFydE9yT25Nb3VzZURvd24oeyBldmVudCB9KTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUpLCBpbml0aWFsU3RhdGUpLCB7IGluaXRpYWw6IHh5LnNsaWNlKCksIHh5LCBzdGFydDogZXZlbnQudGltZVN0YW1wIHx8IDAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgb25Nb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIHNldCgoc3RhdGUsIHByb3BzKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpc1RvdWNoID0gXCJ0b3VjaGVzXCIgaW4gZXZlbnQ7XG4gICAgICAgICAgICAvLyBEaXNjb3VudCBhIHN3aXBlIGlmIGFkZGl0aW9uYWwgdG91Y2hlcyBhcmUgcHJlc2VudCBhZnRlclxuICAgICAgICAgICAgLy8gYSBzd2lwZSBoYXMgc3RhcnRlZC5cbiAgICAgICAgICAgIGlmIChpc1RvdWNoICYmIGV2ZW50LnRvdWNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGlmIHN3aXBlIGhhcyBleGNlZWRlZCBkdXJhdGlvbiBzdG9wIHRyYWNraW5nXG4gICAgICAgICAgICBpZiAoZXZlbnQudGltZVN0YW1wIC0gc3RhdGUuc3RhcnQgPiBwcm9wcy5zd2lwZUR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnN3aXBpbmcgPyBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBzd2lwaW5nOiBmYWxzZSB9KSA6IHN0YXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgeyBjbGllbnRYLCBjbGllbnRZIH0gPSBpc1RvdWNoID8gZXZlbnQudG91Y2hlc1swXSA6IGV2ZW50O1xuICAgICAgICAgICAgY29uc3QgW3gsIHldID0gcm90YXRlWFlCeUFuZ2xlKFtjbGllbnRYLCBjbGllbnRZXSwgcHJvcHMucm90YXRpb25BbmdsZSk7XG4gICAgICAgICAgICBjb25zdCBkZWx0YVggPSB4IC0gc3RhdGUueHlbMF07XG4gICAgICAgICAgICBjb25zdCBkZWx0YVkgPSB5IC0gc3RhdGUueHlbMV07XG4gICAgICAgICAgICBjb25zdCBhYnNYID0gTWF0aC5hYnMoZGVsdGFYKTtcbiAgICAgICAgICAgIGNvbnN0IGFic1kgPSBNYXRoLmFicyhkZWx0YVkpO1xuICAgICAgICAgICAgY29uc3QgdGltZSA9IChldmVudC50aW1lU3RhbXAgfHwgMCkgLSBzdGF0ZS5zdGFydDtcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXR5ID0gTWF0aC5zcXJ0KGFic1ggKiBhYnNYICsgYWJzWSAqIGFic1kpIC8gKHRpbWUgfHwgMSk7XG4gICAgICAgICAgICBjb25zdCB2eHZ5ID0gW2RlbHRhWCAvICh0aW1lIHx8IDEpLCBkZWx0YVkgLyAodGltZSB8fCAxKV07XG4gICAgICAgICAgICBjb25zdCBkaXIgPSBnZXREaXJlY3Rpb24oYWJzWCwgYWJzWSwgZGVsdGFYLCBkZWx0YVkpO1xuICAgICAgICAgICAgLy8gaWYgc3dpcGUgaXMgdW5kZXIgZGVsdGEgYW5kIHdlIGhhdmUgbm90IHN0YXJ0ZWQgdG8gdHJhY2sgYSBzd2lwZTogc2tpcCB1cGRhdGVcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gdHlwZW9mIHByb3BzLmRlbHRhID09PSBcIm51bWJlclwiXG4gICAgICAgICAgICAgICAgPyBwcm9wcy5kZWx0YVxuICAgICAgICAgICAgICAgIDogcHJvcHMuZGVsdGFbZGlyLnRvTG93ZXJDYXNlKCldIHx8XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQcm9wcy5kZWx0YTtcbiAgICAgICAgICAgIGlmIChhYnNYIDwgZGVsdGEgJiYgYWJzWSA8IGRlbHRhICYmICFzdGF0ZS5zd2lwaW5nKVxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhYnNYLFxuICAgICAgICAgICAgICAgIGFic1ksXG4gICAgICAgICAgICAgICAgZGVsdGFYLFxuICAgICAgICAgICAgICAgIGRlbHRhWSxcbiAgICAgICAgICAgICAgICBkaXIsXG4gICAgICAgICAgICAgICAgZXZlbnQsXG4gICAgICAgICAgICAgICAgZmlyc3Q6IHN0YXRlLmZpcnN0LFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHN0YXRlLmluaXRpYWwsXG4gICAgICAgICAgICAgICAgdmVsb2NpdHksXG4gICAgICAgICAgICAgICAgdnh2eSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBjYWxsIG9uU3dpcGVTdGFydCBpZiBwcmVzZW50IGFuZCBpcyBmaXJzdCBzd2lwZSBldmVudFxuICAgICAgICAgICAgZXZlbnREYXRhLmZpcnN0ICYmIHByb3BzLm9uU3dpcGVTdGFydCAmJiBwcm9wcy5vblN3aXBlU3RhcnQoZXZlbnREYXRhKTtcbiAgICAgICAgICAgIC8vIGNhbGwgb25Td2lwaW5nIGlmIHByZXNlbnRcbiAgICAgICAgICAgIHByb3BzLm9uU3dpcGluZyAmJiBwcm9wcy5vblN3aXBpbmcoZXZlbnREYXRhKTtcbiAgICAgICAgICAgIC8vIHRyYWNrIGlmIGEgc3dpcGUgaXMgY2FuY2VsYWJsZSAoaGFuZGxlciBmb3Igc3dpcGluZyBvciBzd2lwZWQoZGlyKSBleGlzdHMpXG4gICAgICAgICAgICAvLyBzbyB3ZSBjYW4gY2FsbCBwcmV2ZW50RGVmYXVsdCBpZiBuZWVkZWRcbiAgICAgICAgICAgIGxldCBjYW5jZWxhYmxlUGFnZVN3aXBlID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAocHJvcHMub25Td2lwaW5nIHx8XG4gICAgICAgICAgICAgICAgcHJvcHMub25Td2lwZWQgfHxcbiAgICAgICAgICAgICAgICBwcm9wc1tgb25Td2lwZWQke2Rpcn1gXSkge1xuICAgICAgICAgICAgICAgIGNhbmNlbGFibGVQYWdlU3dpcGUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGFibGVQYWdlU3dpcGUgJiZcbiAgICAgICAgICAgICAgICBwcm9wcy5wcmV2ZW50U2Nyb2xsT25Td2lwZSAmJlxuICAgICAgICAgICAgICAgIHByb3BzLnRyYWNrVG91Y2ggJiZcbiAgICAgICAgICAgICAgICBldmVudC5jYW5jZWxhYmxlKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCBpcyBub3cgYWx3YXlzIGZhbHNlXG4gICAgICAgICAgICAgICAgZmlyc3Q6IGZhbHNlLCBldmVudERhdGEsIHN3aXBpbmc6IHRydWUgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3Qgb25FbmQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0KChzdGF0ZSwgcHJvcHMpID0+IHtcbiAgICAgICAgICAgIGxldCBldmVudERhdGE7XG4gICAgICAgICAgICBpZiAoc3RhdGUuc3dpcGluZyAmJiBzdGF0ZS5ldmVudERhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyBpZiBzd2lwZSBpcyBsZXNzIHRoYW4gZHVyYXRpb24gZmlyZSBzd2lwZWQgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LnRpbWVTdGFtcCAtIHN0YXRlLnN0YXJ0IDwgcHJvcHMuc3dpcGVEdXJhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBldmVudERhdGEgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLmV2ZW50RGF0YSksIHsgZXZlbnQgfSk7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLm9uU3dpcGVkICYmIHByb3BzLm9uU3dpcGVkKGV2ZW50RGF0YSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9uU3dpcGVkRGlyID0gcHJvcHNbYG9uU3dpcGVkJHtldmVudERhdGEuZGlyfWBdO1xuICAgICAgICAgICAgICAgICAgICBvblN3aXBlZERpciAmJiBvblN3aXBlZERpcihldmVudERhdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BzLm9uVGFwICYmIHByb3BzLm9uVGFwKHsgZXZlbnQgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcm9wcy5vblRvdWNoRW5kT3JPbk1vdXNlVXAgJiYgcHJvcHMub25Ub3VjaEVuZE9yT25Nb3VzZVVwKHsgZXZlbnQgfSk7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgaW5pdGlhbFN0YXRlKSwgeyBldmVudERhdGEgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgY29uc3QgY2xlYW5VcE1vdXNlID0gKCkgPT4ge1xuICAgICAgICAvLyBzYWZlIHRvIGp1c3QgY2FsbCByZW1vdmVFdmVudExpc3RlbmVyXG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIobW91c2VNb3ZlLCBvbk1vdmUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG1vdXNlVXAsIG9uVXApO1xuICAgIH07XG4gICAgY29uc3Qgb25VcCA9IChlKSA9PiB7XG4gICAgICAgIGNsZWFuVXBNb3VzZSgpO1xuICAgICAgICBvbkVuZChlKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiBwYXNzaXZlIG9uIHRvdWNoTW92ZSBkZXBlbmRzIG9uIGBwcmV2ZW50U2Nyb2xsT25Td2lwZWA6XG4gICAgICogLSB0cnVlID0+IHsgcGFzc2l2ZTogZmFsc2UgfVxuICAgICAqIC0gZmFsc2UgPT4geyBwYXNzaXZlOiB0cnVlIH0gLy8gRGVmYXVsdFxuICAgICAqXG4gICAgICogTk9URTogV2hlbiBwcmV2ZW50U2Nyb2xsT25Td2lwZSBpcyB0cnVlLCB3ZSBhdHRlbXB0IHRvIGNhbGwgcHJldmVudERlZmF1bHQgdG8gcHJldmVudCBzY3JvbGwuXG4gICAgICpcbiAgICAgKiBwcm9wcy50b3VjaEV2ZW50T3B0aW9ucyBjYW4gYWxzbyBiZSBzZXQgZm9yIGFsbCB0b3VjaCBldmVudCBsaXN0ZW5lcnMsXG4gICAgICogYnV0IGZvciBgdG91Y2htb3ZlYCBzcGVjaWZpY2FsbHkgd2hlbiBgcHJldmVudFNjcm9sbE9uU3dpcGVgIGl0IHdpbGxcbiAgICAgKiBzdXBlcnNlZGUgYW5kIGZvcmNlIHBhc3NpdmUgdG8gZmFsc2UuXG4gICAgICpcbiAgICAgKi9cbiAgICBjb25zdCBhdHRhY2hUb3VjaCA9IChlbCwgcHJvcHMpID0+IHtcbiAgICAgICAgbGV0IGNsZWFudXAgPSAoKSA9PiB7IH07XG4gICAgICAgIGlmIChlbCAmJiBlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBjb25zdCBiYXNlT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzLnRvdWNoRXZlbnRPcHRpb25zKSwgcHJvcHMudG91Y2hFdmVudE9wdGlvbnMpO1xuICAgICAgICAgICAgLy8gYXR0YWNoIHRvdWNoIGV2ZW50IGxpc3RlbmVycyBhbmQgaGFuZGxlcnNcbiAgICAgICAgICAgIGNvbnN0IHRscyA9IFtcbiAgICAgICAgICAgICAgICBbdG91Y2hTdGFydCwgb25TdGFydCwgYmFzZU9wdGlvbnNdLFxuICAgICAgICAgICAgICAgIC8vIHByZXZlbnRTY3JvbGxPblN3aXBlIG9wdGlvbiBzdXBlcnNlZGVzIHRvdWNoRXZlbnRPcHRpb25zLnBhc3NpdmVcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHRvdWNoTW92ZSxcbiAgICAgICAgICAgICAgICAgICAgb25Nb3ZlLFxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGJhc2VPcHRpb25zKSwgKHByb3BzLnByZXZlbnRTY3JvbGxPblN3aXBlID8geyBwYXNzaXZlOiBmYWxzZSB9IDoge30pKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFt0b3VjaEVuZCwgb25FbmQsIGJhc2VPcHRpb25zXSxcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICB0bHMuZm9yRWFjaCgoW2UsIGgsIG9dKSA9PiBlbC5hZGRFdmVudExpc3RlbmVyKGUsIGgsIG8pKTtcbiAgICAgICAgICAgIC8vIHJldHVybiBwcm9wZXJseSBzY29wZWQgY2xlYW51cCBtZXRob2QgZm9yIHJlbW92aW5nIGxpc3RlbmVycywgb3B0aW9ucyBub3QgcmVxdWlyZWRcbiAgICAgICAgICAgIGNsZWFudXAgPSAoKSA9PiB0bHMuZm9yRWFjaCgoW2UsIGhdKSA9PiBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGUsIGgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2xlYW51cDtcbiAgICB9O1xuICAgIGNvbnN0IG9uUmVmID0gKGVsKSA9PiB7XG4gICAgICAgIC8vIFwiaW5saW5lXCIgcmVmIGZ1bmN0aW9ucyBhcmUgY2FsbGVkIHR3aWNlIG9uIHJlbmRlciwgb25jZSB3aXRoIG51bGwgdGhlbiBhZ2FpbiB3aXRoIERPTSBlbGVtZW50XG4gICAgICAgIC8vIGlnbm9yZSBudWxsIGhlcmVcbiAgICAgICAgaWYgKGVsID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBzZXQoKHN0YXRlLCBwcm9wcykgPT4ge1xuICAgICAgICAgICAgLy8gaWYgdGhlIHNhbWUgRE9NIGVsIGFzIHByZXZpb3VzIGp1c3QgcmV0dXJuIHN0YXRlXG4gICAgICAgICAgICBpZiAoc3RhdGUuZWwgPT09IGVsKVxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGFkZFN0YXRlID0ge307XG4gICAgICAgICAgICAvLyBpZiBuZXcgRE9NIGVsIGNsZWFuIHVwIG9sZCBET00gYW5kIHJlc2V0IGNsZWFuVXBUb3VjaFxuICAgICAgICAgICAgaWYgKHN0YXRlLmVsICYmIHN0YXRlLmVsICE9PSBlbCAmJiBzdGF0ZS5jbGVhblVwVG91Y2gpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jbGVhblVwVG91Y2goKTtcbiAgICAgICAgICAgICAgICBhZGRTdGF0ZS5jbGVhblVwVG91Y2ggPSB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBvbmx5IGF0dGFjaCBpZiB3ZSB3YW50IHRvIHRyYWNrIHRvdWNoXG4gICAgICAgICAgICBpZiAocHJvcHMudHJhY2tUb3VjaCAmJiBlbCkge1xuICAgICAgICAgICAgICAgIGFkZFN0YXRlLmNsZWFuVXBUb3VjaCA9IGF0dGFjaFRvdWNoKGVsLCBwcm9wcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzdG9yZSBldmVudCBhdHRhY2hlZCBET00gZWwgZm9yIGNvbXBhcmlzb24sIGNsZWFuIHVwLCBhbmQgcmUtYXR0YWNobWVudFxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgZWwgfSksIGFkZFN0YXRlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBzZXQgcmVmIGNhbGxiYWNrIHRvIGF0dGFjaCB0b3VjaCBldmVudCBsaXN0ZW5lcnNcbiAgICBjb25zdCBvdXRwdXQgPSB7XG4gICAgICAgIHJlZjogb25SZWYsXG4gICAgfTtcbiAgICAvLyBpZiB0cmFjayBtb3VzZSBhdHRhY2ggbW91c2UgZG93biBsaXN0ZW5lclxuICAgIGlmIChoYW5kbGVyUHJvcHMudHJhY2tNb3VzZSkge1xuICAgICAgICBvdXRwdXQub25Nb3VzZURvd24gPSBvblN0YXJ0O1xuICAgIH1cbiAgICByZXR1cm4gW291dHB1dCwgYXR0YWNoVG91Y2hdO1xufVxuZnVuY3Rpb24gdXBkYXRlVHJhbnNpZW50U3RhdGUoc3RhdGUsIHByb3BzLCBwcmV2aW91c1Byb3BzLCBhdHRhY2hUb3VjaCkge1xuICAgIC8vIGlmIHRyYWNrVG91Y2ggaXMgb2ZmIG9yIHRoZXJlIGlzIG5vIGVsLCB0aGVuIHJlbW92ZSBoYW5kbGVycyBpZiBuZWNlc3NhcnkgYW5kIGV4aXRcbiAgICBpZiAoIXByb3BzLnRyYWNrVG91Y2ggfHwgIXN0YXRlLmVsKSB7XG4gICAgICAgIGlmIChzdGF0ZS5jbGVhblVwVG91Y2gpIHtcbiAgICAgICAgICAgIHN0YXRlLmNsZWFuVXBUb3VjaCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBjbGVhblVwVG91Y2g6IHVuZGVmaW5lZCB9KTtcbiAgICB9XG4gICAgLy8gdHJhY2tUb3VjaCBpcyBvbiwgc28gaWYgdGhlcmUgYXJlIG5vIGhhbmRsZXJzIGF0dGFjaGVkLCBhdHRhY2ggdGhlbSBhbmQgZXhpdFxuICAgIGlmICghc3RhdGUuY2xlYW5VcFRvdWNoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKSwgeyBjbGVhblVwVG91Y2g6IGF0dGFjaFRvdWNoKHN0YXRlLmVsLCBwcm9wcykgfSk7XG4gICAgfVxuICAgIC8vIHRyYWNrVG91Y2ggaXMgb24gYW5kIGhhbmRsZXJzIGFyZSBhbHJlYWR5IGF0dGFjaGVkLCBzbyBpZiBwcmV2ZW50U2Nyb2xsT25Td2lwZSBjaGFuZ2VzIHZhbHVlLFxuICAgIC8vIHJlbW92ZSBhbmQgcmVhdHRhY2ggaGFuZGxlcnMgKHRoaXMgaXMgcmVxdWlyZWQgdG8gdXBkYXRlIHRoZSBwYXNzaXZlIG9wdGlvbiB3aGVuIGF0dGFjaGluZ1xuICAgIC8vIHRoZSBoYW5kbGVycylcbiAgICBpZiAocHJvcHMucHJldmVudFNjcm9sbE9uU3dpcGUgIT09IHByZXZpb3VzUHJvcHMucHJldmVudFNjcm9sbE9uU3dpcGUgfHxcbiAgICAgICAgcHJvcHMudG91Y2hFdmVudE9wdGlvbnMucGFzc2l2ZSAhPT0gcHJldmlvdXNQcm9wcy50b3VjaEV2ZW50T3B0aW9ucy5wYXNzaXZlKSB7XG4gICAgICAgIHN0YXRlLmNsZWFuVXBUb3VjaCgpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSksIHsgY2xlYW5VcFRvdWNoOiBhdHRhY2hUb3VjaChzdGF0ZS5lbCwgcHJvcHMpIH0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG5mdW5jdGlvbiB1c2VTd2lwZWFibGUob3B0aW9ucykge1xuICAgIGNvbnN0IHsgdHJhY2tNb3VzZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCB0cmFuc2llbnRTdGF0ZSA9IFJlYWN0LnVzZVJlZihPYmplY3QuYXNzaWduKHt9LCBpbml0aWFsU3RhdGUpKTtcbiAgICBjb25zdCB0cmFuc2llbnRQcm9wcyA9IFJlYWN0LnVzZVJlZihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0UHJvcHMpKTtcbiAgICAvLyB0cmFjayBwcmV2aW91cyByZW5kZXJlZCBwcm9wc1xuICAgIGNvbnN0IHByZXZpb3VzUHJvcHMgPSBSZWFjdC51c2VSZWYoT2JqZWN0LmFzc2lnbih7fSwgdHJhbnNpZW50UHJvcHMuY3VycmVudCkpO1xuICAgIHByZXZpb3VzUHJvcHMuY3VycmVudCA9IE9iamVjdC5hc3NpZ24oe30sIHRyYW5zaWVudFByb3BzLmN1cnJlbnQpO1xuICAgIC8vIHVwZGF0ZSBjdXJyZW50IHJlbmRlciBwcm9wcyAmIGRlZmF1bHRzXG4gICAgdHJhbnNpZW50UHJvcHMuY3VycmVudCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdFByb3BzKSwgb3B0aW9ucyk7XG4gICAgLy8gRm9yY2UgZGVmYXVsdHMgZm9yIGNvbmZpZyBwcm9wZXJ0aWVzXG4gICAgbGV0IGRlZmF1bHRLZXk7XG4gICAgZm9yIChkZWZhdWx0S2V5IGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICBpZiAodHJhbnNpZW50UHJvcHMuY3VycmVudFtkZWZhdWx0S2V5XSA9PT0gdm9pZCAwKSB7XG4gICAgICAgICAgICB0cmFuc2llbnRQcm9wcy5jdXJyZW50W2RlZmF1bHRLZXldID0gZGVmYXVsdFByb3BzW2RlZmF1bHRLZXldO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IFtoYW5kbGVycywgYXR0YWNoVG91Y2hdID0gUmVhY3QudXNlTWVtbygoKSA9PiBnZXRIYW5kbGVycygoc3RhdGVTZXR0ZXIpID0+ICh0cmFuc2llbnRTdGF0ZS5jdXJyZW50ID0gc3RhdGVTZXR0ZXIodHJhbnNpZW50U3RhdGUuY3VycmVudCwgdHJhbnNpZW50UHJvcHMuY3VycmVudCkpLCB7IHRyYWNrTW91c2UgfSksIFt0cmFja01vdXNlXSk7XG4gICAgdHJhbnNpZW50U3RhdGUuY3VycmVudCA9IHVwZGF0ZVRyYW5zaWVudFN0YXRlKHRyYW5zaWVudFN0YXRlLmN1cnJlbnQsIHRyYW5zaWVudFByb3BzLmN1cnJlbnQsIHByZXZpb3VzUHJvcHMuY3VycmVudCwgYXR0YWNoVG91Y2gpO1xuICAgIHJldHVybiBoYW5kbGVycztcbn1cblxuZXhwb3J0IHsgRE9XTiwgTEVGVCwgUklHSFQsIFVQLCB1c2VTd2lwZWFibGUgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-swipeable/es/index.js\n");

/***/ })

};
;