/************************************ 
 * Staircasing_Suzukiraki_Face Test *
 ************************************/

import { core, data, sound, util, visual } from './lib/psychojs-2022.1.4.js';
const { PsychoJS } = core;
const { TrialHandler, MultiStairHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'staircasing_SuzukiRaki_face';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0,0,0]),
  units: 'pix',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionRoutineBegin());
flowScheduler.add(instructionRoutineEachFrame());
flowScheduler.add(instructionRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_35_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_35_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_11_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_11_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_51_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_51_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_62_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_62_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_38_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_38_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_0_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_0_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_27_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_27_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_36_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_36_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_43_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_43_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_79_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_79_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_48_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_48_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_31_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_31_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_46_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_46_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_78_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_78_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_3_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_3_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_90_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_90_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_89_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_89_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_19_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_19_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_17_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_17_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_2_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_2_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_84_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_84_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_73_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_73_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_12_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_12_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_10_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_10_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_21_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_21_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_70_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_70_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_68_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_68_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_87_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_87_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_34_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_34_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_45_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_45_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_91_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_91_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_14_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_14_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_29_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_29_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_75_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_75_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_95_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_95_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_55_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_55_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_86_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_86_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_4_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_4_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_59_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_59_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_16_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_16_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_85_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_85_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_25_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_25_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_6_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_6_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_74_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_74_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_69_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_69_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_8_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_8_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_60_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_60_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_99_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_99_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_24_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_24_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_63_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_63_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_92_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_92_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_26_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_26_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_67_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_67_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_7_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_7_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_30_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_30_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_33_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_33_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_96_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_96_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_54_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_54_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_22_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_22_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_94_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_94_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_80_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_80_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_71_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_71_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_72_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_72_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_81_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_81_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_61_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_61_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_97_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_97_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_53_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_53_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_42_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_42_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_58_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_58_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_76_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_76_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_5_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_5_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_47_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_47_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_50_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_50_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_9_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_9_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_56_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_56_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_77_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_77_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_88_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_88_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_41_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_41_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_32_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_32_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_49_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_49_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_18_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_18_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_100_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_100_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_23_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_23_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_66_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_66_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_28_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_28_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_57_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_57_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_39_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_39_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_1_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_1_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_15_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_15_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_93_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_93_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_83_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_83_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_44_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_44_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_98_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_98_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_52_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_52_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_65_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_65_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_13_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_13_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_64_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_64_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_20_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_20_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_40_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_40_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_82_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_82_face.png'},
    {'name': 'face_suzuki_smooth_faces/face_suzuki_smooth_37_face.png', 'path': 'face_suzuki_smooth_faces/face_suzuki_smooth_37_face.png'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expName}_${expInfo["date"]}_${expInfo["participant"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionClock;
var text;
var key_resp_1;
var trialClock;
var current_blend;
var correct_counter;
var incorrect_counter;
var step_sizes;
var step_index;
var is_target_blended;
var polygon_1;
var polygon_2;
var key_resp;
var image_face;
var feedbackClock;
var text_2;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "instruction"
  instructionClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'これから、いくつかの顔画像が表示されます。\n\n肌がきれいに見えるように加工されているかを判定してください。\n加工されていると思ったら → yキー（yes）\n加工されていないと思ったら → nキー（no）\n\n加工されている画像と加工されていない画像は等確率で出現します。\n\n実験中は中央の十字を見続けてください。\n\nスペースキーを押すと実験が開始されます。',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 24.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  current_blend = 100;
  correct_counter = 0;
  incorrect_counter = 0;
  step_sizes = [64, 32, 16, 8, 4, 2, 1];
  step_index = 0;
  is_target_blended = true;
  
  polygon_1 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_1', units : 'pix', 
    width: [3.0, 10.0][0], height: [3.0, 10.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -1, interpolate: true,
  });
  
  polygon_2 = new visual.Rect ({
    win: psychoJS.window, name: 'polygon_2', units : 'pix', 
    width: [10.0, 3.0][0], height: [10.0, 3.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color('white'),
    fillColor: new util.Color('white'),
    opacity: undefined, depth: -2, interpolate: true,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  image_face = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_face', units : 'pix', 
    image : undefined, mask : undefined,
    ori : 0.0, pos : [0, 0], size : [720.0, 960.0],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -4.0 
  });
  // Initialize components for Routine "feedback"
  feedbackClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '',
    font: 'Open Sans',
    units: undefined, 
    pos: [0, 0], height: 24.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color('white'),  opacity: undefined,
    depth: 0.0 
  });
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_1_allKeys;
var instructionComponents;
function instructionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'instruction'-------
    t = 0;
    instructionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    // keep track of which components have finished
    instructionComponents = [];
    instructionComponents.push(text);
    instructionComponents.push(key_resp_1);
    
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function instructionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'instruction'-------
    // get current time
    t = instructionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (frameN >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *key_resp_1* updates
    if (frameN >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.clearEvents(); });
    }

    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_1.rt = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function instructionRoutineEnd() {
  return async function () {
    //------Ending Routine 'instruction'-------
    for (const thisComponent of instructionComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_1.corr, level);
    }
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        routineTimer.reset();
        }
    
    key_resp_1.stop();
    // the Routine "instruction" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 80, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: undefined,
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    for (const thisTrial of trials) {
      const snapshot = trials.getSnapshot();
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(trialRoutineBegin(snapshot));
      trialsLoopScheduler.add(trialRoutineEachFrame());
      trialsLoopScheduler.add(trialRoutineEnd());
      trialsLoopScheduler.add(feedbackRoutineBegin(snapshot));
      trialsLoopScheduler.add(feedbackRoutineEachFrame());
      trialsLoopScheduler.add(feedbackRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    }
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var blend_ratio;
var correctAns;
var blend_str;
var image_file;
var _key_resp_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    is_target_blended = (util.randint(0, 2) === 1);
    if (is_target_blended) {
        blend_ratio = current_blend;
        correctAns = "y";
    } else {
        blend_ratio = 0;
        correctAns = "n";
    }
    blend_str = `${blend_ratio}`;
    image_file = (("face_suzuki_smooth_faces/face_suzuki_smooth_" + blend_str) + "_face.png");
    psychoJS.experiment.addData("correctAns", correctAns);
    psychoJS.experiment.addData("current_blend", current_blend);
    psychoJS.experiment.addData("blend_ratio", blend_ratio);
    psychoJS.experiment.addData("image_file", image_file);
    
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    image_face.setImage(image_file);
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(polygon_1);
    trialComponents.push(polygon_2);
    trialComponents.push(key_resp);
    trialComponents.push(image_face);
    
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'trial'-------
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *polygon_1* updates
    if (frameN >= 20 && polygon_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_1.tStart = t;  // (not accounting for frame time here)
      polygon_1.frameNStart = frameN;  // exact frame index
      
      polygon_1.setAutoDraw(true);
    }

    
    // *polygon_2* updates
    if (frameN >= 20 && polygon_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      polygon_2.tStart = t;  // (not accounting for frame time here)
      polygon_2.frameNStart = frameN;  // exact frame index
      
      polygon_2.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (frameN >= 20 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['y', 'n'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == correctAns) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
        }
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *image_face* updates
    if (frameN >= 20 && image_face.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_face.tStart = t;  // (not accounting for frame time here)
      image_face.frameNStart = frameN;  // exact frame index
      
      image_face.setAutoDraw(true);
    }

    if (image_face.status === PsychoJS.Status.STARTED && frameN >= (image_face.frameNStart + 30)) {
      image_face.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of trialComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var iscorrect;
var text_display;
function trialRoutineEnd() {
  return async function () {
    //------Ending Routine 'trial'-------
    for (const thisComponent of trialComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    if ((((key_resp.keys === "y") && is_target_blended) || ((key_resp.keys === "n") && (! is_target_blended)))) {
        correct_counter += 1;
        incorrect_counter = 0;
        iscorrect = true;
    } else {
        incorrect_counter += 1;
        correct_counter = 0;
        iscorrect = false;
    }
    if ((correct_counter >= 3)) {
        step_index = Math.min(step_index, (step_sizes.length - 1));
        current_blend = Math.max(1, (current_blend - step_sizes[step_index]));
        correct_counter = 0;
        step_index = (step_index + 1);
    } else {
        if ((incorrect_counter >= 1)) {
            step_index = Math.min(step_index, (step_sizes.length - 1));
            current_blend = Math.min(100, (current_blend + step_sizes[step_index]));
            incorrect_counter = 0;
            step_index = (step_index + 1);
        }
    }
    text_display = (iscorrect ? "\u6b63\u89e3" : "\u4e0d\u6b63\u89e3");
    
    // was no response the correct answer?!
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(correctAns)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for current loop
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var feedbackComponents;
function feedbackRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'feedback'-------
    t = 0;
    feedbackClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    text_2.setText(text_display);
    // keep track of which components have finished
    feedbackComponents = [];
    feedbackComponents.push(text_2);
    
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function feedbackRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'feedback'-------
    // get current time
    t = feedbackClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (frameN >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    if (text_2.status === PsychoJS.Status.STARTED && frameN >= (text_2.frameNStart + 20)) {
      text_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of feedbackComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function feedbackRoutineEnd() {
  return async function () {
    //------Ending Routine 'feedback'-------
    for (const thisComponent of feedbackComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "feedback" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
