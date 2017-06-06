module.exports = function(grunt) {
  grunt.loadNpmTasks("grunt-prettier");

  grunt.initConfig({
    prettier: {
      gruntfile: {
        src: ["Gruntfile.js"]
      }
    }
  });

  grunt.registerTask("default", ["prettier"]);
};
