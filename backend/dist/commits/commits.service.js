"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config_1 = require("../config");
let CommitsService = class CommitsService {
    constructor() {
        this.commits = [];
    }
    async findAll() {
        try {
            const res = await axios_1.default.get('https://api.github.com/repos/CharlesPs/fulltimeforce-technical-test/commits', { headers: {
                    'Accept': 'application/vnd.github.v3+json',
                    'Authorization': `token ${config_1.default.ghToken}`,
                } });
            return res.data;
        }
        catch (error) {
            throw error;
        }
    }
};
CommitsService = __decorate([
    (0, common_1.Injectable)()
], CommitsService);
exports.CommitsService = CommitsService;
//# sourceMappingURL=commits.service.js.map