/// <reference path="../node_modules/inversify-dts/inversify/inversify.d.ts" />
/// <reference path="../node_modules/reflect-metadata/reflect-metadata.d.ts" />

/**
 * Framework API
 */
export { IBundle                } from "./robotlegs/bender/framework/api/IBundle";
export { IConfig                } from "./robotlegs/bender/framework/api/IConfig";
export { IContext               } from "./robotlegs/bender/framework/api/IContext";
export { IExtension             } from "./robotlegs/bender/framework/api/IExtension";
export { IGuard                 } from "./robotlegs/bender/framework/api/IGuard";
export { IHook                  } from "./robotlegs/bender/framework/api/IHook";
export { IInjector              } from "./robotlegs/bender/framework/api/IInjector";
export { ILifecycle             } from "./robotlegs/bender/framework/api/ILifecycle";
export { ILogger                } from "./robotlegs/bender/framework/api/ILogger";
export { ILogTarget             } from "./robotlegs/bender/framework/api/ILogTarget";
export { IMatcher               } from "./robotlegs/bender/framework/api/IMatcher";
export { LifecycleError         } from "./robotlegs/bender/framework/api/LifecycleError";
export { LifecycleEvent         } from "./robotlegs/bender/framework/api/LifecycleEvent";
export { LifecycleState         } from "./robotlegs/bender/framework/api/LifecycleState";
export { LogLevel               } from "./robotlegs/bender/framework/api/LogLevel";
export { PinEvent               } from "./robotlegs/bender/framework/api/PinEvent";

/**
 * Framework Implementation
 */
export { ConfigManager          } from "./robotlegs/bender/framework/impl/ConfigManager";
export { Context                } from "./robotlegs/bender/framework/impl/Context";
export { ExtensionInstaller     } from "./robotlegs/bender/framework/impl/ExtensionInstaller";
export { Lifecycle              } from "./robotlegs/bender/framework/impl/Lifecycle";
export { LifecycleTransition    } from "./robotlegs/bender/framework/impl/LifecycleTransition";
export { Logger                 } from "./robotlegs/bender/framework/impl/Logger";
export { LogManager             } from "./robotlegs/bender/framework/impl/LogManager";
export { MessageDispatcher      } from "./robotlegs/bender/framework/impl/MessageDispatcher";
export { ObjectProcessor        } from "./robotlegs/bender/framework/impl/ObjectProcessor";
export { Pin                    } from "./robotlegs/bender/framework/impl/Pin";
export { RobotlegsInjector      } from "./robotlegs/bender/framework/impl/RobotlegsInjector";
export { UID                    } from "./robotlegs/bender/framework/impl/UID";

/**
 * Framework Functions
 */
export { applyHooks             } from "./robotlegs/bender/framework/impl/applyHooks";
export { guardsApprove          } from "./robotlegs/bender/framework/impl/guardsApprove";
export { safelyCallBack         } from "./robotlegs/bender/framework/impl/safelyCallBack";

export { EventDispatcher        } from "./robotlegs/bender/events/EventDispatcher";
export { IEventDispatcher       } from "./robotlegs/bender/events/IEventDispatcher";

/*
 * Dependency injection
 */
export { injectable, inject     } from "inversify";
