module.exports = function(src) {
    return this.query.callback.call(this, src);
}