"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = __importDefault(require("."));
async function main() {
    try {
        await _1.default.listen(8080, () => {
            console.log("server is running perfectly fine.");
        });
    }
    catch (error) {
        console.log("🚀 ~ file: server.ts:10 ~ main ~ error:", error);
    }
}
main();
