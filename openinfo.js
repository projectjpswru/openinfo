const openinfo = [{
    launcherVer = "beta 0.1",
    launcherAuthor = "TheFunnyDay",
    launcherName = "JSR Launcher",
    bgNow = "https://i.ibb.co/NpBsGrz/background.jpg",
    charNow = "https://i.ibb.co/FXJJJ6J/Ephnel-Character-Art.png",
}];

document.getElementById("jsrlauncher-ver").innerHTML = `
 ${openinfo.launcherVer}
`;
document.getElementById("jsrlauncher-author").innerHTML = `
 ${openinfo.launcherAuthor}
`;
document.getElementById("jsrlauncher-name").innerHTML = `
 ${openinfo.launcherName}
`;