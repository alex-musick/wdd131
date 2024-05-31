try {
    let visitCount = Number(localStorage.getItem("visitCount"));
    visitCount++;
    localStorage.setItem("visitCount", visitCount.toString());
} catch {
    localStorage.setItem("visitCount", "1");
}