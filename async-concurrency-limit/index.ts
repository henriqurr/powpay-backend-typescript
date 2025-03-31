import { run } from "./services/worker";

const main = async () => {
  run(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
}

main();
