const Controller = require('egg').Controller;
const fs = require('fs');

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hello world';
    }

    async render() {
        //await this.ctx.render('html/index.html');
        this.ctx.body = fs.readFileSync('client/dist/index.html', 'utf8');
    }
}

module.exports = HomeController;
